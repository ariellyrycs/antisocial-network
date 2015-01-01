'use strict';

var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    app = express(),
    jsFiles = new RegExp(".(js)$", "i"),
    routes = {};


fs.readdirSync(__dirname + '/api/routes').forEach(function (fileName) {
    if(jsFiles.test(fileName)) {
        routes[fileName] = require(__dirname + '/api/routes/' + fileName);
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app')));
app.use('/', routes['index.js']);






// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

mongoose.connect('mongodb://localhost/pets', function(err) {
    if(err) {
        console.log('error connecting to MongoDB Database. ' + err);
    } else {
        console.log('Connected to Database');
    }
});

app.listen(app.get('port'), function () {
    console.log('listening on port ' + app.get('port'));
});

module.exports = app;