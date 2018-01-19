const express = require('express');

const app = express();

let userList = [{
    id: '1',
    name: 'godking',
    title: 'SE'
}, {
    id: '2',
    name: 'oceansky',
    title: 'QA'
}];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/user/:id', (req, res) => {
    let userId = req.params.id;
    let user = userList.filter(user => user.id === userId)[0];

    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(user));
});

let server = app.listen(9000, () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`Listening at port ${port}`)
});