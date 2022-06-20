#! /usr/bin / env node

import path, { dirname } from 'path';

import { fileURLToPath } from 'url';
import { release, version } from 'os';
import http, {IncomingMessage, ServerResponse} from 'http';

import { userId } from './utils/userId.js';
import { createUser } from './Api/createUser.js';
import { deleteUser } from './Api/deleteUser.js';
import { getAllUsers } from './Api/getAllUsers.js';
import { getUser } from './Api/getUser.js';
import { updateUser } from './Api/updateUser.js';
import { User } from 'utils/types.js';

const PORT = process.env.DEV_PORT || 8000;
const HOST = process.env.DEV_HOST || '127.0.0.1';
const URL = `http://${HOST}:${PORT}`;


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const myServer = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Content-Type', "application/json");
  req.on ("error", (err) => {
    return res.statusMessage = err.message;
  }
  );
  
  // Get All Users
  if (req.url === '/api/users' && req.method === 'GET') {
    req.statusCode = 200;
    getAllUsers();
     res.end(console.log(JSON.stringify(getAllUsers())));
  }

  // Get User by Id
  if (req.url === '/api/users/:id' && req.method === 'GET' ) {
    req.statusCode = 200;
    const id = req.url.split('/').pop();
    getUser(id);
    res.end(JSON.stringify(getUser(id)));
  }

  // Create User
  if (req.url === '/api/users' && req.method === 'POST') {
    console.log(req.statusCode);
    let body: string = '';

  req.on("data",  (chunk) => {
    body += chunk;
    console.log(body);
});
  req.on("end", () => {
    const user: User = JSON.parse(body);
    createUser(user);
    res.write(JSON.stringify(createUser(user)));
    res.end();
  }
  );
  }
  

  // res.on("end", function () {
  //   const body = chunks.toString();
  //   console.log(body.toString());
  // });
  // }


  //   let body:User = {
  //     username: '',
  //     age: 0,
  //     hobbies: []
  //   };
  //   req.on('readable', function() {
  //     body += req.read();
  // });
  //   const user: User = body;
  //   console.log(user);
  //   createUser(user);
  //   res.end(JSON.stringify(createUser(user)));
  // }
  //   req.on('data', (data) => {
  //     const user: User = JSON.parse(data.toString());
  //     createUser(user);
  //     res.end(JSON.stringify(createUser(user)));
  //   }
  //   );
  // }
    // let body: User = {
      
    //  username: 'Olena',
    //   age: 50,
    //   hobbies: []
    // };
    // createUser(body);
   // res.end(console.log(JSON.stringify(createUser)));
  //}


  // Update User'
  if (req.url === '/api/users/:id' && req.method === 'PUT') {
    const id = req.url.split('/').pop();
    req.statusCode = 200;
    updateUser(id);
    res.end(JSON.stringify(updateUser(id)));
  }
  // Delete User
  if (req.url === '/api/users/:id' && req.method === 'DELETE') {
    const id = req.url.split('/').pop();
    req.statusCode = 200;
    deleteUser(id);
    res.end(JSON.stringify(deleteUser(id)));
  }
});

console.log(`${URL}/api/users`);

myServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
myServer.on("error", (error) => {
  console.log(error);
  myServer.on("data", () => {
    console.log("data");
  myServer.close();
});

  myServer.on("close", () => {
    console.log("close");
  }
  );
}
);

