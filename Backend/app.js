// app.js
const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
app.use(cors())

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Lipun@008',
  database: 'music_app'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ "msg": "api is working" });
  })

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const token = jwt.sign({ email }, 'your_secret_key', { expiresIn: '1h' });

  res.json({ token });
});

app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  const token = jwt.sign({ email }, 'your_secret_key', { expiresIn: '1h' });

  res.json({ token });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
