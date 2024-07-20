const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();
app.use(express.json());
app.use(logger);

app.use(express.static(path.join(__dirname, '../app/public')));

// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/public', 'index.html'));
// });


app.listen(3001);
console.log('Sever listening on port 3001')