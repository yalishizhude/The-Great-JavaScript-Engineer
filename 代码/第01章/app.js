// app.js
'use strict';
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});
app.listen(8080, '0.0.0.0');