import { createServer } from 'http';
import { logger, jsonMiddleware } from './middleware.js';

const PORT = process.env.PORT;

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Jim Doe' },
];

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
};

// Route handler for GET /api/users/:id
const getUsersByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
        res.write(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'User not found' }));
    }
    res.end();
};

// Not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'Route not found' }));
    res.end();
}

// Route handler for POST /api/users
const createUserHandler = (req, res) => {
    let body = '';
    // Listen for data
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201; // Means successful and something was created
        res.write(JSON.stringify(newUser));
        res.end();
    });
};

// SERVER 
const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.url === '/api/users' && req.method === 'GET') {
                getUsersHandler(req, res);
            }
            else if (req.url.match(/\api\/users\/([0-9]+)/) && req.method === 'GET') {
                jsonMiddleware(req, res, () => {
                    getUsersByIdHandler(req, res);
                })
            } else if (req.url === '/api/users' && req.method === 'POST') {
                createUserHandler(req, res);
            }
            else {
                jsonMiddleware(req, res, () => {
                    notFoundHandler(req, res);
                })
            }
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});