const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();

const db = mysql.createConnection({
    host: 'database-1.czossuamwemz.ap-south-1.rds.amazonaws.com',
    user: 'appuser',
    password: 'AppUser@123',
    database: 'appdb'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to RDS');
});

app.use(express.static('public'));

app.get('/api/employees', (req, res) => {
    db.query('SELECT * FROM employees', (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});