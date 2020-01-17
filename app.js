var express = require('express');

var dataRouter = require('./routes/dataRouter.js');

var app = express();

app.use(express.json());
app.use('/', dataRouter);

app.listen(8080, () => console.log(`Example app listening on port 8080!`))

module.exports = app;
