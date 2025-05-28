import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// URL Object
const urlObj = new URL(urlString);
console.log(urlObj);
console.log(`Pathname: ${urlObj.pathname}`);

// format()
// It takes the object and format it to string.
console.log(url.format(urlObj));

// Import.meta.url - It gives a file URL
console.log(import.meta.url);

// fileURLToPath() - Converts to regular path
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log(params.get('q'));
params.append('limit', '5');
params.delete('limit');
console.log(params);
