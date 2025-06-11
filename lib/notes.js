import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const NOTES_DIR = path.join(process.cwd(), 'notes');

// Helper function to capitalize the first letter of each word
function capitalizeEachWord(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

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
      const unitsFromDirectory = meta.units.filter(unit => unit).map(unit => {
        const title = capitalizeEachWord(String(unit.name || unit.title || ''));
        const path = String(unit.path || unit.file || '');
        return { title, path };
      }).sort((a, b) => {
        const titleA = String(a.title || '');
        const titleB = String(b.title || '');
        const numA = parseInt(titleA.split('.')[0]);
        const numB = parseInt(titleB.split('.')[0]);
        if (!isNaN(numA) && !isNaN(numB)) {
          return numA - numB;
        }
        return titleA.localeCompare(titleB);
      });

      console.log('DEBUG: Units generated:', unitsFromDirectory);
      return unitsFromDirectory;
    }
  }

  // Fallback to old behavior if meta.json or units array is not found/valid
  const unitsFromDirectory = fs.readdirSync(coursePath).filter(name =>
    fs.statSync(path.join(coursePath, name)).isDirectory()
  ).map(unitName => {
    const title = capitalizeEachWord(String(unitName.replace(/\d+\.\s*/, '').replace(/[-_]/g, ' ') || ''));
    const path = String(unitName || '');
    return { title, path };
  }).sort((a, b) => {
    const titleA = String(a.title || '');
    const titleB = String(b.title || '');
    const numA = parseInt(titleA.split('.')[0]);
    const numB = parseInt(titleB.split('.')[0]);
    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }
    return titleA.localeCompare(titleB);
  });

  console.log('DEBUG: Units generated:', unitsFromDirectory);
  return unitsFromDirectory;
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