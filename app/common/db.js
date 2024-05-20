var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'eFarm'
});

connection.connect(function(err, connection) {
    if(err) console.log("ket noi csdl khong thanh cong")
});

module.exports = connection;