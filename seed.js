var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'pancakedonutcrepe',
  database: 'seedDB'
});

connection.connect();

var propsSQL = "INSERT INTO properties (id, maxChildren, maxAdults, maxInfants, rating, reviewAmount, nightPrice, cleaningFee, serviceFee, discount) VALUES ?";

var bookingsSQL = "INSERT INTO bookings (id, checkIn, checkOut) VALUES ?";




function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


// var id= rand(10000, 99999);

// var maxChildren = rand(0, 3);

// var maxAdults = rand(2, 11);

// var maxInfants = rand(0, 2);

// var rating = rand(3, 5);

// var reviewAmount = rand(50, 400);

// var nightPrice = rand(50, 400);

// var cleaningFee = rand(30, 200);

// var serviceFee = rand(30, 300);

// var discount = rand(.10, .40);



var values = [];

for (var i = 0; i < 100; i++) {
  values.push([rand(10000, 99999), rand(0, 3), rand(2, 11), rand(0, 2), rand(3, 5), rand(50, 400), rand(50, 400), rand(30, 200), rand(30, 300), rand(.10, .40)]);
}


console.log(values);


connection.query(propsSQL, [values], function (err, result) {
  if (err) throw err;
});

connection.end();

