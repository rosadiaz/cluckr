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

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
});