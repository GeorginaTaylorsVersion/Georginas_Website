import { visit } from 'unist-util-visit';

export default function remarkPythonCodeBox() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      if (node.lang === 'python') {
        if (!node.data) {
          node.data = {};
        }
        if (!node.data.hProperties) {
          node.data.hProperties = {};
        }
        if (!node.data.hProperties.className) {
          node.data.hProperties.className = [];
        }
        node.data.hProperties.className.push('python-code-box');
      }
    });
  };
} 