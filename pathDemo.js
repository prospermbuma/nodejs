import path, { resolve } from 'path';
import url from 'url';

const filePath = './dir/dir2/test.txt';

// basename()
// The basename is the filename
console.log(`File: ${path.basename(filePath)}`);

// dirname()
// The dirname is the directory path
console.log(`Directory: ${path.dirname(filePath)}`);

// extname()
// Getting the extension name
console.log(`Extension: ${path.extname(filePath)}`);

// parse()
// The parse() function creates a javascript object
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

// join()
/* 
Purpose: The path.join() method is used to join multiple path segments into a single path. It automatically uses the correct directory separator for the operating system (e.g., \ for Windows and / for macOS/Linux).

Usage: By using path.join(), you can avoid issues related to manually specifying the separator, which ensures your code works seamlessly on different platforms.  */

const userPath = path.join('Users', 'johndoe', 'documents');  // Outputs: "Users\johndoe\documents" on Windows and "Users/johndoe/documents" on macOS/Linux
console.log(userPath);

const dumbPath = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(dumbPath);

// resolve() 
// It does the same as the join() but it works with only absolute path.
const dumbPath2 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(dumbPath2);