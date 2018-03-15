const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

let userList = [{
    id: '1',
    userName: 'godking',
    title: 'SE',
    password: 'zhouyang1234'
}, {
    id: '2',
    userName: 'oceansky',
    title: 'QA',
    password: 'oceansky1234'
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

app.post('/login', (req, res) =>{
    var body = req.body;
    let user = userList.filter(user => user.userName === body.userName )[0];
    res.header('Content-Type', 'application/json');
    if(user && user.password === body.password){
        let token = 'UAf9Ppjsdjaf0wlfsa=';
        user.token = token;
        let result = {
            authenticated: true,
            token
        };
        res.send(JSON.stringify(result));
    }else{
        res.status(401);
        let result = {
            authenticated: false
        };
        res.send(JSON.stringify(result));
    }

});

let server = app.listen(9000, () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`Listening at port ${port}`)
});