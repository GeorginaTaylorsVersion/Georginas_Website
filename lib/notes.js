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

export function getNotes(term, course) {
  return fs.readdirSync(path.join(NOTES_DIR, term, course))
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));
}

export function getNoteContent(term, course, note) {
  const fullPath = path.join(NOTES_DIR, term, course, `${note}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);
  return { content, data };
} 