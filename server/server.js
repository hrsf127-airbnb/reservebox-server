const express = require('express');
const app = express();
const port = 3000;
const {getPropertyData} = require('./controller.js');
var bodyParser = require('body-parser');


app.use(express.static('client/dist'));
app.use(bodyParser.json());


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.get('/properties/:id', getPropertyData);