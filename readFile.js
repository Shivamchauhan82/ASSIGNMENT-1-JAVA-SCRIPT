const fs = require('fs');

// Define the file path
const filePath = 'sample.txt';

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  
  // Output the file content to the terminal
  console.log('File content:');
  console.log(data);
});
