const fs = require('fs');
const path = require('path');
const commander = require('commander');

commander
  .option('-s, --source <source>', 'Source directory path')
  .option('-t, --target <target>', 'Target directory path')
  .parse(process.argv);

const sourceDir = commander.source;
const targetDir = commander.target;

if (!sourceDir || !targetDir) {
  console.error('Please provide both source and target directory paths.');
  process.exit(1);
}

function copyFilesWithExtensions(sourceDir, targetDir, extensions) {
  fs.readdir(sourceDir, (err, files) => {
    if (err) {
      console.error(`Error reading source directory: ${err}`);
      return;
    }

    for (const file of files) {
      const sourceFilePath = path.join(sourceDir, file);
      const targetFilePath = path.join(targetDir, file);

      const fileExtension = path.extname(file).toLowerCase();
      if (extensions.includes(fileExtension)) {
        fs.copyFile(sourceFilePath, targetFilePath, (copyErr) => {
          if (copyErr) {
            console.error(`Error copying ${file}: ${copyErr}`);
          } else {
            console.log(`Copied ${file} to ${targetDir}`);
          }
        });
      }
    }
  });
}

const extensionsToCopy = ['.txt', '.jpg']; // Add more extensions as needed
copyFilesWithExtensions(sourceDir, targetDir, extensionsToCopy);
