var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var storesRouter = require('./routes/stores');
var supplierRouter = require('./routes/supplier');
var spoilMainRouter = require('./routes/spoilMain');
var commodityRouter = require('./routes/commodity');
var serviceRouter = require('./routes/service');
var indentRouter = require('./routes/indent');
var productRouter = require('./routes/product');
var serveRouter = require('./routes/serve');
var applyforRouter = require('./routes/applyfor');
var closuresRouter = require('./routes/closures');
var businessRouter = require('./routes/business');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/stores', storesRouter);
app.use('/supplier', supplierRouter);
app.use('/spoilMain', spoilMainRouter);
app.use('/commodity', commodityRouter);
app.use('/service', serviceRouter);
app.use('/indent', indentRouter);
app.use('/product', productRouter);
app.use('/serve', serveRouter);
app.use('/applyfor', applyforRouter);
app.use('/closures', closuresRouter);
app.use('/business', businessRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
