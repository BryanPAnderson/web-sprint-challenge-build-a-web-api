const express = require('express');
const projectRouter = require("./projects/projects-router");
const actionRouter = require("./actions/actions-router");
const server = express();

server.use(express.json())
server.use(projectRouter)
server.use(actionRouter)

server.use((err, req, res) => {
    console.log(err)

    res.status(500).json({
        message: "Something went wrong, please try again later"
    })
})

module.exports = server;
