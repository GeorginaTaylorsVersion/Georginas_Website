import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

function rehypeConsecutiveImages() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      // Handle multiple images inside a single <p> tag
      if (node.tagName === 'p' && node.children) {
        const imageChildren = node.children.filter(
          (child) => child.type === 'element' && child.tagName === 'img'
        );

        if (imageChildren.length > 1) {
          // Wrap the <p> tag with a div.image-row
          const wrapper = h('div.image-row', node.children);
          parent.children[index] = wrapper;
          return [visit.SKIP, index]; // Skip visiting children of the new wrapper
        }
      }
    });

    // Keep the original logic for consecutive <p><img></p> tags for other cases
    visit(tree, 'element', (node) => {
      if (!node.children || node.children.length < 2) return;

      const newChildren = [];
      let buffer = [];

      const flushBuffer = () => {
        if (buffer.length > 1) {
          newChildren.push({
            type: 'element',
            tagName: 'div',
            properties: { className: ['image-row'] },
            // Extract the <img> node from the <p> node
            children: buffer.map((pNode) => pNode.children[0]),
          });
        } else if (buffer.length === 1) {
          newChildren.push(buffer[0]);
        }
        buffer = [];
      };

      for (const child of node.children) {
        if (
          child.type === 'element' &&
          child.tagName === 'p' &&
          child.children &&
          child.children.length === 1 &&
          child.children[0].type === 'element' &&
          child.children[0].tagName === 'img'
        ) {
          buffer.push(child);
        } else {
          flushBuffer();
          newChildren.push(child);
        }
      }

      flushBuffer();
      node.children = newChildren;
    });
  };
}

export default rehypeConsecutiveImages; 