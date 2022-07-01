const express = require ("express");
const app = express();
const path = require("path");

app.listen(3080, ()=>{
    console.log("servidor corriendo en puerto 3080")
});
app.use(express.static("public"));

app.get("/", (req,res) => res.sendFile(path.resolve(__dirname, "views", "home.html")));



