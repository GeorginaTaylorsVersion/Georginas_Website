import { visit } from 'unist-util-visit';
import path from 'path';

function rehypeImagePaths(options) {
  const { imagePathFixes, term, course, unit } = options;

  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img' && node.properties && node.properties.src) {
        let src = node.properties.src;

        // Extract the filename from the src path
        const filename = path.basename(src);

        // Check if the filename needs to be fixed
        if (imagePathFixes[filename]) {
          const newFilename = imagePathFixes[filename];
          // Reconstruct the new path with the correct filename
          // Assuming the structure /notes/{term}/{course}/{unit}/{filename}
          const parts = src.split('/');
          // Replace the last part (filename) with the new filename
          parts[parts.length - 1] = newFilename;
          const newSrc = parts.join('/');
          
          node.properties.src = newSrc;
          console.log(`DEBUG: Fixed image path from ${src} to ${newSrc}`);
        }
      }
    });
  };
}

export default rehypeImagePaths; 