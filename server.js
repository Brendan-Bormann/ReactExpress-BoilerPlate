const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;

app.get("/back", (req, res) => {
    console.log("Back End has been hit.");
    res.send({ "info" : "Express was here 😮" });
});

app.use(express.static(__dirname + '/client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🌎-Port: ${PORT}-🌎`);
});