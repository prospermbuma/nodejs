import os from 'os';

// userInfo()
console.log(os.userInfo());
console.log(`Username: ${os.userInfo().username}`);

// totalmem()
console.log(`Total Memory: ${os.totalmem()}`);

// freemem()
console.log(`Free Memory: ${os.freemem()}`);

// cpus()
console.log(os.cpus());