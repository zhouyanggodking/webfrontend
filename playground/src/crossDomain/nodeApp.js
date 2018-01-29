const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'nodePage.html'));
});

let server = app.listen(9000, () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`Listening at port ${port}`)
});