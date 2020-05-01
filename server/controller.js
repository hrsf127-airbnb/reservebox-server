var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'pancakedonutcrepe',
  database: 'seedDB'
});

connection.connect();


module.exports = {
  getPropertyData: (req, res) => {
    var id = req.params.id;
    var sqlQuery = `SELECT * FROM properties WHERE id = ${id}`;
    connection.query(sqlQuery, function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  }
}