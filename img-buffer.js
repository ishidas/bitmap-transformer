'use strict';
var fs = require('fs');
var bitmapObjFile = require( __dirname + '/bitmap-obj.js');
var events = require('events');
var emitter = new events.EventEmitter();



//reading and writing files using fs readFile & writeFile method
fs.readFile( __dirname + '/img/palette-bitmap.bmp',function(err, data){
  var bitmap = {};

  emitter.on('saveBuffer', function(data){
    bitmap = data;
    fs.writeFile( __dirname + '/img/color.bmp',bitmap);
    bitmapObjFile.createBitmapObj(bitmap);
  });

  emitter.emit('saveBuffer', data);
  
});
