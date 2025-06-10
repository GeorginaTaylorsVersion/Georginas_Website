const fs = require('fs');
const path = require('path');

const TARGET_DIR = path.join(process.cwd(), 'public', 'notes', '1B', 'MATH 136');

// Define the exact source paths for the images and their target directories
const imageMappings = [
  {
    source: '/Users/ysabelwang/Documents/Georginas_Website/public/notes/1B/MATH 136/1-vectors-in-euclidean-space/1-vectors-in-euclidean-space-1bf115b71c11809e8169f0930b1e8cc5/screenshot-2025-06-05-5-21-51-pm.png',
    target: '1. Vectors in Euclidean Space',
    filename: 'Screenshot_2025-06-05_at_5.21.51_pm.png'
  },
  {
    source: '/Users/ysabelwang/Documents/Georginas_Website/public/notes/1B/MATH 136/1-vectors-in-euclidean-space/1-vectors-in-euclidean-space-1bf115b71c11809e8169f0930b1e8cc5/screenshot-2025-06-05-5-29-25-pm.png',
    target: '1. Vectors in Euclidean Space',
    filename: 'Screenshot_2025-06-05_at_5.29.25_pm.png'
  },
  {
    source: '/Users/ysabelwang/Documents/Georginas_Website/public/notes/1B/MATH 136/1-vectors-in-euclidean-space/1-vectors-in-euclidean-space-1bf115b71c11809e8169f0930b1e8cc5/screenshot-2025-06-05-5-30-55-pm.png',
    target: '1. Vectors in Euclidean Space',
    filename: 'Screenshot_2025-06-05_at_5.30.55_pm.png'
  },
  {
    source: '/Users/ysabelwang/Documents/Georginas_Website/public/notes/1B/MATH 136/1-vectors-in-euclidean-space/1-vectors-in-euclidean-space-1bf115b71c11809e8169f0930b1e8cc5/screenshot-2025-06-05-5-35-16-pm.png',
    target: '1. Vectors in Euclidean Space',
    filename: 'Screenshot_2025-06-05_at_5.35.16_pm.png'
  },
  {
    source: '/Users/ysabelwang/Documents/Georginas_Website/public/notes/1B/MATH 136/1-vectors-in-euclidean-space/1-vectors-in-euclidean-space-1bf115b71c11809e8169f0930b1e8cc5/screenshot-2025-06-05-5-38-17-pm.png',
    target: '1. Vectors in Euclidean Space',
    filename: 'Screenshot_2025-06-05_at_5.38.17_pm.png'
  },
  {
    source: '/Users/ysabelwang/Documents/Georginas_Website/public/notes/1B/MATH 136/1-vectors-in-euclidean-space/1-vectors-in-euclidean-space-1bf115b71c11809e8169f0930b1e8cc5/screenshot-2025-06-05-5-38-35-pm.png',
    target: '1. Vectors in Euclidean Space',
    filename: 'Screenshot_2025-06-05_at_5.38.35_pm.png'
  },
  {
    source: '/Users/ysabelwang/Documents/Georginas_Website/public/notes/1B/MATH 136/2-systems-of-linear-equations/2-systems-of-linear-equations-1bf115b71c1180109334fa2fb144f28e/screenshot-2025-06-05-5-41-34-pm.png',
    target: '2. Systems of Linear Equations',
    filename: 'Screenshot_2025-06-05_at_5.41.34_pm.png'
  },
  {
    source: '/Users/ysabelwang/Documents/Georginas_Website/public/notes/1B/MATH 136/3-matrices-and-linear-mappings/3-matrices-and-linear-mappings-1bf115b71c1180cbac60cff3f52f5590/screenshot-2025-06-05-5-54-22-pm.png',
    target: '3. Matrices and Linear Mappings',
    filename: 'Screenshot_2025-06-05_at_5.54.22_pm.png'
  },
  {
    source: '/Users/ysabelwang/Documents/Georginas_Website/public/notes/1B/MATH 136/3-matrices-and-linear-mappings/3-matrices-and-linear-mappings-1bf115b71c1180cbac60cff3f52f5590/screenshot-2025-06-05-5-54-49-pm.png',
    target: '3. Matrices and Linear Mappings',
    filename: 'Screenshot_2025-06-05_at_5.54.49_pm.png'
  },
  {
    source: '/Users/ysabelwang/Documents/Georginas_Website/public/notes/1B/MATH 136/4-inverses-and-determinants/4-inverses-and-determinants-1bf115b71c1180b0942bd198361402a5/screenshot-2025-06-05-6-03-36-pm.png',
    target: '4. Inverses and Determinants',
    filename: 'Screenshot_2025-06-05_at_6.03.36_pm.png'
  }
];

function moveImages() {
  // Ensure the target directory exists
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }

  // Iterate over the image mappings
  for (const mapping of imageMappings) {
    const targetSubdir = path.join(TARGET_DIR, mapping.target);
    const targetPath = path.join(targetSubdir, mapping.filename);

    // Create the target subdirectory if it doesn't exist
    if (!fs.existsSync(targetSubdir)) {
      fs.mkdirSync(targetSubdir, { recursive: true });
    }

    // Check if the source file exists
    if (fs.existsSync(mapping.source)) {
      fs.copyFileSync(mapping.source, targetPath);
      console.log(`Moved ${mapping.filename} to ${targetPath}`);
    } else {
      console.warn(`Source file not found: ${mapping.source}`);
    }
  }
}

moveImages(); 