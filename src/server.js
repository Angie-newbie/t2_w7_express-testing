
const express = require("express");
const app = express();

app.use(express.json());

//declare a basic root route
// for confirmong the server works
app.get("/", (request, response)=> {
    response.json({
        message: "Hello, world!"
    });
});

app.post("/post-test", (request, response)=> {
    console.log("BodyData here" + Json.stringfy(request.body));
    response.json({
        recievedData: request.body
    });
});

module.exports = {
    app: app,
    PORT: PORT
}