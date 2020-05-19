var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'pancakedonutcrepe',
  database: 'seedDB'
});

connection.connect();


module.exports = {

  retrieveInitialData: (req, res) => {
    var id = req.params.id;
    connection.query(`select nightPrice, rating, reviewAmount, id from properties limit ${id}, 1;`, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
    });
  },

  reserveClickHandler: (req, res) => {
    connection.query(`INSERT INTO bookings (dateIn, dateOut, id) values ('${req.body.dateOne}', '${req.body.dateTwo}', ${req.body.dataID}) `, function (err, result) {
    if (err) throw err;
    console.log("post complete");
    res.send("post complete");
    });
  }


}