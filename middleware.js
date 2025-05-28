import fs from 'fs/promises';

// Logger middleware
const logger = (req, res, next) => {

    const appendFile = async () => {
        try {
            await fs.appendFile('./logs.txt', `Method: ${req.method}\nEndpoint: ${req.url}\n-------------------------------------------\n`);
        } catch (err) {
            console.log(err);
        }
    };
    appendFile();
    console.log(`${req.method} ${req.url}`);
    next();
};

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
};

export { logger, jsonMiddleware };