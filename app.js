const express = require('express')
const path = require('path')
const app = express();
const PORT = 3000


app.use("/", express.static(path.join(__dirname,"public")))

app.get("/", function (request, response) {
    response.send("Hello, World!")
})

app.get("/about", function(request ,response){
    response.send("Это простое приложение на Express.js")
})

app.get("*", function(request ,response){
    response.send("Страница не найдена")
})

app.listen(PORT, (error) => {
    if (!error) console.log("Serving on: http://localhost:3000/")
    else console.log("Error occurred, server can't start", error);
})