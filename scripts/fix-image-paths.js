const fs = require('fs');
const path = require('path');

const NOTES_DIR = path.join(process.cwd(), 'notes');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Map of markdown image references to actual filenames
const imageNameMap = {
  'screenshot-2025-06-05-5-21-51-pm.png': 'Screenshot_2025-06-05_at_5.21.51_pm.png',
  'screenshot-2025-06-05-5-29-25-pm.png': 'Screenshot_2025-06-05_at_5.29.25_pm.png',
  'screenshot-2025-06-05-5-30-55-pm.png': 'Screenshot_2025-06-05_at_5.30.55_pm.png',
  'screenshot-2025-06-05-5-35-16-pm.png': 'Screenshot_2025-06-05_at_5.35.16_pm.png',
  'screenshot-2025-06-05-5-38-17-pm.png': 'Screenshot_2025-06-05_at_5.38.17_pm.png',
  'screenshot-2025-06-05-5-38-35-pm.png': 'Screenshot_2025-06-05_at_5.38.35_pm.png',
  'screenshot-2025-06-05-5-41-34-pm.png': 'Screenshot_2025-06-05_at_5.41.34_pm.png',
  'screenshot-2025-06-05-5-54-22-pm.png': 'Screenshot_2025-06-05_at_5.54.22_pm.png',
  'screenshot-2025-06-05-5-54-49-pm.png': 'Screenshot_2025-06-05_at_5.54.49_pm.png',
  'screenshot-2025-06-05-6-03-36-pm.png': 'Screenshot_2025-06-05_at_6.03.36_pm.png'
};

function fixImagePaths() {
  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.md')) {
        let content = fs.readFileSync(filePath, 'utf8');
        const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
        
        // Replace image paths
        content = content.replace(imageRegex, (match, alt, imagePath) => {
          if (imagePath.startsWith('http')) return match; // Skip external URLs
          
          // Get the relative path from notes directory
          const relativePath = path.relative(NOTES_DIR, dir);
          const filename = path.basename(imagePath);
          const actualFilename = imageNameMap[filename] || filename;
          const publicPath = `/notes/${relativePath}/${actualFilename}`;
          
          return `![${alt}](${publicPath})`;
        });
        
        fs.writeFileSync(filePath, content);
        console.log(`Updated image paths in ${filePath}`);
      }
    });
  }
  
  walkDir(NOTES_DIR);
}

fixImagePaths(); 