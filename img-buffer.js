'use strict';
var fs = require('fs');
var bitmapObjFile = require( __dirname + '/bitmap-obj.js');
var changeColor = require( __dirname + '/change-color.js');
// var blackWhite = require( __dirname + '/black-white.js');
var events = require('events');
var emitter = new events.EventEmitter();

//********************************************************************
//reading palette bitmap image and writing in a file called color.bmp
//********************************************************************
fs.readFile( __dirname + '/img/palette-bitmap.bmp',function(err, data){
  var bitmap = {};

  emitter.on('saveBuffer', function(data){
    bitmap = data;
    bitmapObjFile.createBitmapObj(bitmap);
    changeColor.transform(bitmap);
    // blackWhite.blackAndWhite(bitmap);
  });
  fs.writeFile( __dirname + '/img/color.bmp',data);
  emitter.emit('saveBuffer', data);
});

//****************************************************************************
//Reading non palette bitmap image and writing in a file called non-color.bmp
//****************************************************************************
fs.readFile(__dirname + '/img/non-palette-bitmap.bmp', function(err, data){
  var bitmap = {};

  emitter.on('saveBufferNonPalette', function(data){
    bitmap = data;
    bitmapObjFile.createBitmapObj(bitmap);
    changeColor.transform(bitmap);
    // blackWhite.blackAndWhite(bitmap);
  });
  fs.writeFile(__dirname + '/img/non-color.bmp', data);
  emitter.emit('saveBufferNonPalette', data);
});
