const{app,Port} = require("./server.js")

app.listen(Port, () => {
    console.log("proceed" + process.env.Port)
})

module.exports ={
    app: app
}