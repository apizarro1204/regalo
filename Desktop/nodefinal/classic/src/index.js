const express = require('express');
const app = express();
const path = require('path');


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('img', path.join(__dirname, 'img'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.json());

// middlewares

// routes
app.use(require('./routes/index.js'));

// connection to the server


// static files
app.use(express.static(path.join(__dirname, 'public')));

// listening the server
app.listen(app.get('port'), function () {
    console.log('Server on port', app.get('port'));
});

// send email to solicitudcupon@gmail.com
