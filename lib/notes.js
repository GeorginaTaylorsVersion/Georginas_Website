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
  const metaPath = path.join(coursePath, 'meta.json');

  if (fs.existsSync(metaPath)) {
    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
    if (meta.units && Array.isArray(meta.units)) {
      // Use the units defined in meta.json, ensuring they are sorted by name
      return meta.units.map(unit => ({
        title: unit.name,
        path: unit.path // Use 'path' as the slug/directory name
      })).sort((a, b) => {
        const numA = parseInt(a.title.split('.')[0]);
        const numB = parseInt(b.title.split('.')[0]);
        if (!isNaN(numA) && !isNaN(numB)) {
          return numA - numB;
        }
        return a.title.localeCompare(b.title);
      });
    }
  }

  // Fallback to old behavior if meta.json or units array is not found/valid
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

export function getNotes(term, course, unitPath) { // Renamed unit to unitPath to avoid confusion
  const unitDir = unitPath; // Assuming unitPath is already the directory name
  const fullUnitPath = path.join(NOTES_DIR, term, course, unitDir);
  if (!fs.existsSync(fullUnitPath) || !fs.statSync(fullUnitPath).isDirectory()) {
    return [];
  }
  return fs.readdirSync(fullUnitPath)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace('.md', ''));
}

export function getNoteContent(term, course, unitPath, note) {
  const fullPath = path.join(NOTES_DIR, term, course, unitPath, `${note}.md`);
  if (!fs.existsSync(fullPath)) {
    return { content: 'Note not found.', data: {} };
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);
  return { content, data };
}

export function getUnitTitle(term, course, unitPath) {
  const metaPath = path.join(NOTES_DIR, term, course, 'meta.json');
  if (!fs.existsSync(metaPath)) return unitPath; // Fallback to path if meta.json not found
  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  if (!meta.units) return unitPath; // Fallback to path if units array not found

  // Find the unit by matching its path
  const found = meta.units.find(u => u.path === unitPath);
  return found ? found.name : unitPath; // Return the 'name' from meta.json
} 