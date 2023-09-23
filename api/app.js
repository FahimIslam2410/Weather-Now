const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const JWT = require('jsonwebtoken');
const cors = require('cors'); 

const weatherRouter = require('./routes/weather');
const app = express();


const corsOptions = {
  origin: 'https://weather-now-forecast.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
};

app.use(cors(corsOptions));

// setup for receiving JSON
app.use(express.json());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/weather', weatherRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // respond with details of the error
  res.status(err.status || 500).json({ message: 'server error' });
});

module.exports = app;
