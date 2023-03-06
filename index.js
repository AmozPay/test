const express = require("express")

app = express()

app.get("/", (req, res) => res.send("Hello Fourmey"));

app.listen(80, '0.0.0.0', () => console.log("listening on 80"))
