const express = require("express")

app = express()

app.get("/", (req, res) => res.send("Hello World"));

app.listen(8080, '0.0.0.0', () => console.log("listening on 8080"))
