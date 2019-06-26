const createError = require('http-errors');
const express = require('express');


const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const engine = require('ejs-locals');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.engine('ejs', engine);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', indexRouter);
app.use('/home', usersRouter);
// app.listen(3000,(err)=>{
//   if(!err) {
//     console.log("connecting with port 3000");
//   }
// });
app.get('/ejslocal', (req,res,next) => {
  res.render('ejs-local', { what: 'best', who: 'me' });
});

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// app.get('/example', [cb0, cb1], function (req, res, next) {
//   console.log('the response will be sent by the next function ...')
//   next()
// }, function (req, res) {
//   res.send('Hello from D!');
// });
// app.get('/example',function(req,res,next) {
//   console.log("first response")
//   next()
// },function(req,res,next) {
//   res.send("second response");
// });
module.exports = app;
