const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())

const clientRegistration = {
  clientId: 'my-client-app-id',
  clientSecret: 'my-client-secret',
  clientName: 'my-app'
};

const user = {
  username: 'king',
  password: 'test'
};

const accessToken = '==sfsoduf==access==9wefjuoj==';

// host index.html
app.get('/oauth', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// authorization endpoint
app.post('/api/authorization', (req, res) => {
  const body = req.body;
  if (body.username === user.username && body.password === user.password) {
    // generate unique code
    const code = Math.floor(Math.random() * 10000000).toString();
    clientRegistration.code = code;
    res.json({
      code
    });
  } else {
    res.status(401);
    res.json({
      msg: 'invalid credential'
    });
  }
  
});

// token endpoint
app.post('/api/token', (req, res) => {
  const body = req.body;
  console.log(body)
  console.log(clientRegistration)
  if (body.code === clientRegistration.code && 
    body.clientId == clientRegistration.clientId && 
    body.secret === clientRegistration.clientSecret) {    
    res.json({
      accessToken
    });
  } else {
    res.status(401);
    res.end();
  }  
});

app.get('/api/user_info', (req, res) => {
  const userToken = req.header('Authorization');
  if (userToken === accessToken) {
    res.json({
      username: 'Judd Trump',
      title: 'Gambler'
    });
  } else {
    res.status(401);
    res.end();
  }
})

app.listen(9999, () =>{
  console.log('auth server listening on port 9999');
});
