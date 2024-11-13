const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;
const db = require('./util/database');
const dotenv = require('dotenv');

app.use(cors({ origin: 'http://localhost:3000' }));
dotenv.config()

app.get('/', (req, res) => {
  res.send('Hello from the Express server!');
});

db.execute('SELECT * FROM ___');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
