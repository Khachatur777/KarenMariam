const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(express.static('page'))
app.use('/assets', express.static('assets'))


app.get('/join', (req, res) => {
    res.sendFile(__dirname + '/page/index.html');
})

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use(cors());


module.exports = app;
