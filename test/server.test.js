


const {app} = require("../src/server.js");
const request = require("supertest");

describe("Make sure the serber boots up properly", () => {
    test("Hello world routes responds with status code 200 and a nice message", async () => { 
        let response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Hello, world!");

        
         });

    test("Post-test route reflects body data", async () => { 
        let response = await request(app).post("/post-test").send({
            message:"post-test body test content"

        });
        console.log(Object.keys(response.body))

        expect(response.body.recievedData.message).toBe("post-test body test content");

         });
});