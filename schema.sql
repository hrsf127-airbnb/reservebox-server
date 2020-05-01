CREATE DATABASE IF NOT EXISTS seedDB;

USE seedDB;

DROP TABLE IF EXISTS properties;

CREATE TABLE properties (id INT, maxChildren INT,
maxAdults INT, maxInfants INT, rating DECIMAL(5,2),
reviewAmount INT, nightPrice INT, cleaningFee INT,
serviceFee INT, discount DECIMAL(3,2));

CREATE TABLE bookings (id INT, checkIn DATE, checkOut DATE);

