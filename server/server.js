const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.use('*', (req, res) => res.status(404).type('txt').send('404 Not Found'));

app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).send(err);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

module.exports = app;