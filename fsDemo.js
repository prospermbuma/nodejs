// import fs from 'fs';
import fs from 'fs/promises';

// readFile() - callback (Asynchronous version)
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// readFileSync() - Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

// readFile() - Promise .then() version
// fs.readFile('./test.txt', 'utf8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// readFile() - async/await version
const readingFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

readingFile();

// writeFile()
const writingFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello there, I am Prosperity');
        console.log('File written to...');
    } catch (err) {
        console.log(err);
    }
};

writingFile();

// appendFile()
const appendingFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nI love coding..');
    } catch (error) {
        console.log(error);
    }
}

appendingFile();