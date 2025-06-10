import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const NOTES_DIR = path.join(process.cwd(), 'public/notes');

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

export function getUnitTitle(term, course, unit) {
  const metaPath = path.join(NOTES_DIR, term, course, 'meta.json');
  if (!fs.existsSync(metaPath)) return unit;
  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  if (!meta.units) return unit;
  // Try to find the unit by matching the file path or folder name
  const found = meta.units.find(u => {
    // Some meta.json use just the folder, some use folder/file
    if (u.file === unit) return true;
    // If file is like '4. Inverses and Determinants/4 Inverses and Determinants ...'
    if (u.file && u.file.startsWith(unit)) return true;
    // If file is just the file name, check if it matches the start
    if (u.file && unit && u.file.split('/')[0] === unit) return true;
    return false;
  });
  return found ? found.title : unit;
} 