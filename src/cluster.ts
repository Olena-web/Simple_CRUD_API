#! /usr/bin / env node

import cluster from 'node:cluster';
import http from 'node:http';
import { cpus } from 'node:os';
import process from 'node:process';
import { myServer } from './server.js';

const PORT = process.env.DEV_PORT || 8000;
const HOST = process.env.DEV_HOST || '127.0.0.1';
const URL = `http://${HOST}:${PORT}`;
console.log(`${URL}/api/users`);
const numCPUs = cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  // if (cluster.isWorker){
  //   console.log(`Worker ${process.pid} started`);

  // }
  myServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  myServer.on("error", (error) => {
  console.log(error);
  myServer.on("data", () => {
    //console.log("data");
    //console.log('Process ' + `${process.pid}` + ' is listening to all incoming requests');
  myServer.close();
});

  myServer.on("close", () => {
    console.log("close");
  }
  );
}
);
   console.log(`Worker ${process.pid} started`);
}