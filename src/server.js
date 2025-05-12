
const express = require("express");
const app = express();

//declare a basic root route
// for confirmong the server works
app.get("/", (request, response)=> {
    response.json({
        message: "Hello, world!"
    });
});

module.exports = {
    app: app
}