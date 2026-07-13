const express = require("express");
const connectDb = require("./connection/connectionjs");
const taskRouter = require("./router/taskRouter");
require("dotenv").config()
connectDb();

const server = express();
const port = process.env.PORT || 5000

server.use(express.urlencoded({extended: true}))
server.use(express.json())

server.use("/api", taskRouter);

server.listen(port, ()=>{
    console.log(`the server is listening to port ${port}`)
})