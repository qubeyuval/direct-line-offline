const directline = require("offline-directline");
const express = require("express");

const app = express();
directline.initializeRoutes(app, "http://127.0.0.1:3000", "http://127.0.0.1:3978/api/messages");

console.log('Routing http://localhost:3000/directline -> http://127.0.0.1:3978/api/messages');
