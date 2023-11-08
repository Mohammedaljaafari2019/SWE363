const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Get command-line arguments
const args = process.argv.slice(2); 

// Check if there are enough arguments
if (args.length < 3) {
  console.error('Usage: node copyFiles.js <source directory> <target directory> <file extensions>');
  process.exit(1);
}

const sourceDir = args[0];
const targetDir = args[1];
const extensions = args[2].split(',');

async function copyFiles() {
  try {
    const files = await fs.promises.readdir(sourceDir);

    for (const file of files) {
      const sourceFilePath = path.join(sourceDir, file);
      const targetFilePath = path.join(targetDir, file);

      const fileExtension = path.extname(file).toLowerCase();

      if (extensions.includes(fileExtension)) {
        await fs.promises.copyFile(sourceFilePath, targetFilePath);
        console.log(`Copied ${file} to ${targetDir}`);
      }
    }

    console.log('Copy completed!');
  } catch (err) {
    console.error(`Error copying files: ${err}`);
  }
}

copyFiles();

