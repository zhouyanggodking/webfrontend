const express = require('express');
const path = require('path');

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

app.get('/user/:id', (req, res)=>{
    let userId = req.params.id;
    let user = userList.filter(user => user.id === userId)[0];

    //res.header('Content-Type', 'application/json');
    // res.header('Access-Control-Allow-Methods', 'GET');
    // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

    if(req.query.jsonp && req.query.callback){
        let userJson = JSON.stringify(user);
        let response = `${req.query.callback}(${userJson})`;
        res.send(response);
    }else{
        res.send(JSON.stringify(user));
    }
});


app.get('/nodePage.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'nodePage.html'));
});

let server = app.listen(9000, () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`Listening at port ${port}`)
});