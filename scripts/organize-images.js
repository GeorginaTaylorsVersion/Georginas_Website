const fs = require('fs');
const path = require('path');

const NOTES_DIR = path.join(process.cwd(), 'notes');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

function copyImagesToPublic() {
  // Walk through all notes directories
  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Recursively process subdirectories
        walkDir(filePath);
      } else if (file.endsWith('.md')) {
        // Process markdown files
        const content = fs.readFileSync(filePath, 'utf8');
        const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
        let match;
        
        while ((match = imageRegex.exec(content)) !== null) {
          const imagePath = match[2];
          if (imagePath.startsWith('http')) continue; // Skip external URLs
          
          // Get the relative path from notes directory
          const relativePath = path.relative(NOTES_DIR, dir);
          const publicPath = path.join(PUBLIC_DIR, 'notes', relativePath);
          
          // Create the public directory if it doesn't exist
          if (!fs.existsSync(publicPath)) {
            fs.mkdirSync(publicPath, { recursive: true });
          }
          
          // Copy the image to public directory
          const sourceImagePath = path.join(dir, imagePath);
          const destImagePath = path.join(publicPath, path.basename(imagePath));
          
          if (fs.existsSync(sourceImagePath)) {
            fs.copyFileSync(sourceImagePath, destImagePath);
            console.log(`Copied ${sourceImagePath} to ${destImagePath}`);
          } else {
            console.warn(`Image not found: ${sourceImagePath}`);
          }
        }
      }
    });
  }
  
  walkDir(NOTES_DIR);
}

copyImagesToPublic(); 