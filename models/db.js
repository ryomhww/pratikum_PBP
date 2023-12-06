const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mahasiswa',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to msql database:', err);
    } else {
        console.log('connected to mysql database');
    }
});

module.exports = connection;