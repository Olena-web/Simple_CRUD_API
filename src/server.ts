#! /usr/bin / env node

import path, { dirname } from 'path';

import { fileURLToPath } from 'url';
import { release, version } from 'os';
import http, {eIncomingMessage, ServerResponse} from 'http';
import {response} from './utils/response.js';
import { userId } from './utils/userId.js';
import { createUser } from './Api/createUser.js';
import { deleteUser } from './Api/deleteUser.js';
import { getAllUsers } from './Api/getAllUsers.js';
import { getUser } from './Api/getUser.js';
import { updateUser } from './Api/updateUser.js';
import { User } from 'utils/types.js';
import {getUserReq} from './utils/getUserReq.js';

const PORT = process.env.DEV_PORT || 8000;
const HOST = process.env.DEV_HOST || '127.0.0.1';
const URL = `http://${HOST}:${PORT}`;


export const myServer = http.createServer( (req: eIncomingMessage, res: ServerResponse) => {
  const id:string = req.url.split('/').pop();
  
  res.setHeader('Content-Type', "application/json");
  req.on ("error", (err) => {
    return res.statusMessage = err.message;
  }
  );
  
  // Get All Users
  if (req.url === '/api/users' ||req.url === '/api/users/' && req.method === 'GET') {
    req.statusCode = 200;
    getAllUsers();
    res.write(JSON.stringify(getAllUsers()));
    console.log(getAllUsers());
    res.end();
  }

  
  // Create User
  if (req.url === '/api/users' && req.method === 'POST') {
    req.statusCode = 200;
    let body: string = '';

  req.on("data",  (chunk) => {
    body += chunk;
    
});
  req.on("end", () => {
    if (body === '') {
      res.statusCode = 400;
      res.statusMessage = "Bad request";
      res.end();
      return;
    } 
    const user: User = JSON.parse(body);
    res.write(JSON.stringify(createUser(user)));
    //createUser(user);
    res.end();
    }
  );
 
  }
   
  // Get User by Id
  if (req.url === `/api/users/${id}` && req.method === 'GET' ) {
    req.statusCode = 200;
    //getUser(`${id}`);
    //console.log(getUser(`${id}`));
    res.write(JSON.stringify(getUser(`${id}`)));
    res.end();
  }

  // Update User'
  if (req.url === `/api/users/${id}` && req.method === 'PUT') {
    req.statusCode = 200;
    let body: string = '';
    req.on("data",  (chunk) => {
      body += chunk;
    });
  req.on("end", () => {
    if (!body) {
      res.statusCode = 400;
      res.statusMessage = "Bad request";
      res.end();
      return;
    }
    const user: User = JSON.parse(body);
    res.write(JSON.stringify(updateUser(`${id}`, user)));
    res.end();
  }
  );
  }

  // Delete User
  if (req.url === `/api/users/${id}` && req.method === 'DELETE') {
    req.statusCode = 200;
    res.write(JSON.stringify(deleteUser(`${id}`)));
    res.end();
  }
});

console.log(`${URL}/api/users`);

myServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
myServer.on("error", (error) => {
  console.log(error);
  myServer.on("data", () => {
    console.log("data");
  myServer.close();


  myServer.on("close", () => {
    console.log("close");
  }
  );
  myServer.on('uncaughtException',()=> {myServer.close();})
  myServer.on('SIGTERM',()=> {myServer.close();})
}
);
}
);