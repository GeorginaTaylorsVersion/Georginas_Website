import { visit } from 'unist-util-visit';

function remarkConsecutiveImages() {
  return (tree) => {
    // Find all image nodes and their positions
    const imageNodes = [];
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'img') {
        imageNodes.push({ node, index, parent });
      }
    });
    console.log('[remark-consecutive-images] Found', imageNodes.length, 'image nodes');
    
    // Group consecutive images
    const imageGroups = [];
    let currentGroup = [];
    
    for (let i = 0; i < imageNodes.length; i++) {
      const current = imageNodes[i];
      const next = imageNodes[i + 1];
      currentGroup.push(current);
      if (!next || 
          next.parent !== current.parent || 
          next.index !== current.index + 1) {
        if (currentGroup.length > 1) {
          imageGroups.push([...currentGroup]);
        }
        currentGroup = [];
      }
    }
    console.log('[remark-consecutive-images] Found', imageGroups.length, 'groups of consecutive images');
    
    // Process each group of consecutive images
    imageGroups.forEach((group, groupIdx) => {
      if (group.length < 2) return;
      const firstImage = group[0];
      const parent = firstImage.parent;
      // Create a flex container
      const flexContainer = {
        type: 'element',
        tagName: 'div',
        properties: {
          className: ['image-row'],
          style: 'display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin: 1rem 0;'
        },
        children: []
      };
      // Remove images from their original positions and add to flex container
      const indicesToRemove = group.map(g => g.index).sort((a, b) => b - a); // Sort in descending order
      indicesToRemove.forEach(index => {
        const imageNode = parent.children[index];
        imageNode.properties = imageNode.properties || {};
        imageNode.properties.style = 'flex: 1; min-width: 0; max-width: calc(50% - 0.5rem); margin: 0;';
        parent.children.splice(index, 1);
        flexContainer.children.push(imageNode);
      });
      // Insert flex container at the position of the first image
      const insertIndex = Math.min(...indicesToRemove);
      parent.children.splice(insertIndex, 0, flexContainer);
      console.log(`[remark-consecutive-images] Wrapped group #${groupIdx + 1} of length ${group.length}`);
    });
  };
}

export default remarkConsecutiveImages; 