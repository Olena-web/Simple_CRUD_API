#! /usr/bin / env node

import fs from 'fs/promises';
import path, { dirname } from 'path';

import { fileURLToPath } from 'url';
import { release, version } from 'os';
import http from 'http';
import module from 'module';
import { userId } from './utils/userId.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// const aPath = path.resolve(__dirname, 'files/a.json');
// const bPath = path.resolve(__dirname, 'files/b.json');

// const a = await fs.readFile(aPath, 'utf8');
// const b = await fs.readFile(bPath, 'utf8');

// const aData = JSON.parse(a);
// const bData = JSON.parse(b);

// const random = Math.random();-

const getUser = userId;
console.log(getUser);

// if (random > 0.5) {
//   unknownObject = aData;
// } else {
//   unknownObject = bData;
// }
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = http.createServer((_, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (_.url === 'api/users') {
    _.statusCode = 200
    res.end(JSON.stringify(getUser));
  }
});
const PORT = process.env.PROD_PORT || 8000;
console.log(PORT);

myServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
myServer.on("error", (error) => {
  console.log(error);
});


// module.exports = {
//   getUser,
//   myServer,
// };
