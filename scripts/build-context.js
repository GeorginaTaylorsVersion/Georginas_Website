const fs = require('fs').promises;
const path = require('path');

// This function is duplicated from pages/api/chat.js but is needed here.
async function getAllMarkdownFiles(dir) {
  let files = [];
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files = files.concat(await getAllMarkdownFiles(fullPath));
      } else if (entry.isFile() && path.extname(fullPath) === '.md') {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Ignore errors for directories that might not exist (like in a sparse checkout)
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }
  return files;
}

async function buildContext() {
  console.log('Starting to build notes context for chatbot...');
  try {
    const notesDir = path.join(process.cwd(), 'notes');
    const noteFiles = await getAllMarkdownFiles(notesDir);
    let allNotesContent = '';

    for (const file of noteFiles) {
        const content = await fs.readFile(file, 'utf-8');
        const relativePath = path.relative(notesDir, file);
        allNotesContent += `--- START OF NOTE: ${relativePath} ---\n\n${content}\n\n--- END OF NOTE: ${relativePath} ---\n\n`;
    }

    const libDir = path.join(process.cwd(), 'lib');
    await fs.mkdir(libDir, { recursive: true });

    // Storing as a JSON object for easy parsing.
    await fs.writeFile(path.join(libDir, 'notes-context.json'), JSON.stringify({ content: allNotesContent }));
    console.log('Successfully built and cached notes context in lib/notes-context.json');

  } catch (error) {
    console.error('Error building notes context:', error);
    process.exit(1); // Exit with an error code to fail the build if context generation fails.
  }
}

buildContext(); 