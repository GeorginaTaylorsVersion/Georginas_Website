const fs = require('fs');
const path = require('path');

const NOTES_DIR = path.join(process.cwd(), 'notes');

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
          const publicPath = `/notes/${relativePath}/${path.basename(imagePath)}`;
          
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