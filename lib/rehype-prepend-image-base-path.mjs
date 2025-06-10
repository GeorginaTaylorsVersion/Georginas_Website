import { visit } from 'unist-util-visit';

function rehypePrependImageBasePath(options) {
  const { term, course, unit } = options;
  const basePath = `/notes/${term}/${course}/units/${unit}/`;

  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img' && node.properties && node.properties.src) {
        let src = node.properties.src;

        // Check if the src is a relative path (doesn't start with / or http)
        if (src && !src.startsWith('/') && !src.startsWith('http')) {
          node.properties.src = basePath + src;
          console.log(`DEBUG: Prepend image path from ${src} to ${node.properties.src}`);
        }
      }
    });
  };
}

export default rehypePrependImageBasePath; 