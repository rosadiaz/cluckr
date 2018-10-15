const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const path = require('path');
app.use(express.static(path.join(__dirname, "public")))

const morgan = require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => {
  username = req.cookies.username;
	res.render('index', {username});
});

app.get('/sign_in', (req, res) => {
	res.render('sign_in');
});
app.post('/sign_out', (req, res) => {
  console.log('post from sign out')
	res.clearCookie('username');
  res.redirect('/');
});

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24; // keep for one day
app.post('/sign_in', (req, res) => {
  const username = req.body.username;
  console.log(`🍪 username in cookie: ${username}`)
  res.cookie('username', username, { maxAge: COOKIE_MAX_AGE });
  res.redirect("/");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
});