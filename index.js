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

app.get('/', (request, response) => {
	response.render('index');
});
app.get('/sign_in', (request, response) => {
	response.render('sign_in');
});

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24; // keep for one day
app.post("/sign_in", (request, response) => {
  const username = request.body.username;
  console.log(`username: ${username}`)
  response.cookie(username, { maxAge: COOKIE_MAX_AGE });
  response.redirect("/");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
});