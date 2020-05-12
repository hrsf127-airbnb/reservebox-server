const express = require('express');
const app = express();
const port = 3000;
const {getPropertyData} = require('./controller.js');
var bodyParser = require('body-parser');
const {retrieveInitialData, reserveClickHandler} = require('./controller.js');



app.use(express.static('client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded());


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.get('/getInitialData/:id', retrieveInitialData);
app.post('/recordDates', reserveClickHandler);