const express = require('express');
const app = express();
app.set("view engine", "ejs");

const path = require('path')
app.use(express.static(path.join(__dirname, "public")))

const morgan = require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/index', (request, response) => {
	response.render('index');
  response.send(`<h1>This is Rosa's firs quiz</h1>`);
});
