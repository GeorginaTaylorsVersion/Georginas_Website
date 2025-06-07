import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const NOTES_DIR = path.join(process.cwd(), 'notes');

export function getTerms() {
  return fs.readdirSync(NOTES_DIR).filter(name =>
    fs.statSync(path.join(NOTES_DIR, name)).isDirectory()
  );
}

export function getCourses(term) {
  const termPath = path.join(NOTES_DIR, term);
  return fs.readdirSync(termPath).filter(name =>
    fs.statSync(path.join(termPath, name)).isDirectory()
  );
}

export function getUnits(term, course) {
  const coursePath = path.join(NOTES_DIR, term, course);
  return fs.readdirSync(coursePath).filter(name =>
    fs.statSync(path.join(coursePath, name)).isDirectory()
  ).sort((a, b) => {
    const numA = parseInt(a.split('.')[0]);
    const numB = parseInt(b.split('.')[0]);
    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }
    return a.localeCompare(b);
  });
}

export function getNotes(term, course, unit) {
  const unitPath = path.join(NOTES_DIR, term, course, unit);
  if (!fs.existsSync(unitPath) || !fs.statSync(unitPath).isDirectory()) {
    return [];
  }
  return fs.readdirSync(unitPath)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));
}

export function getNoteContent(term, course, unit, note) {
  const fullPath = path.join(NOTES_DIR, term, course, unit, `${note}.md`);
  if (!fs.existsSync(fullPath)) {
    return { content: 'Note not found.', data: {} };
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);
  return { content, data };
} 