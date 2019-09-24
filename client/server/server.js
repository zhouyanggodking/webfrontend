const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json())

const clientId = 'my-client-app-id';
const secret = 'my-client-secret';
const token = '==sldfjsdlfjds==pfiwepfipwef==';

let accessToken = '';

app.post('/api/notify_code', (req, res) => {
  const body = req.body;
  const code = body.code;
  // send client id, secrect, code to get access token
  axios.post('http://localhost:9999/api/token', {
    code,
    clientId,
    secret,
    grant_type: 'authorization_code',
    redirect_uri: '' // omitted here
  }).then(response => {
    accessToken = response.data.accessToken;
    res.json({
      token
    });
  }).catch((error) => {
    res.status(401);
    res.end();
  });  
});

app.get('/api/user_info', (req, res) => {
  const userToken = req.header('Authorization');
  if (userToken === token) {
    axios.get('http://localhost:9999/api/user_info', {
      headers: {
        Authorization: accessToken
      }
    }).then(response => {
      res.json(response.data);
    }).catch((error) => {
      res.status(401);
      res.end();
    })
  } else {
    res.status(401);
    res.end();
  }
});

app.listen(8888, () =>{
  console.log('client server listening on port 8888');
});
