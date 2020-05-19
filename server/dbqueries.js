var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'pancakedonutcrepe',
  database: 'seedDB'
});

connection.connect();

module.exports {

  getNightPrice = (res) => {
    connection.query("select nightPrice from properties limit 55, 1;", function (err, result) {
    if (err) throw err;
    });
  }
  getRating = (res) => {
    connection.query("select rating from properties limit 55, 1;", function (err, result) {
    if (err) throw err;
    });
  }

  getNumberOfReviews = (res) => {
    connection.query("select reviewAmount from properties limit 55, 1;", function (err, result) {
    if (err) throw err;
    });
  }

}

