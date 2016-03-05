'use strict';
var fs = require('fs');
var events = require('events');
var emitter = new events.EventEmitter();

var bitmapBuf;

//reading and writing files using fs readFile & writeFile method
fs.readFile( __dirname + '/img/palette-bitmap.bmp', function(err, data){
  console.log(data);

  emitter.on('saveBuffer', function(data){
    bitmapBuf = data;
    // console.log(`I am here :  ${bitmapBuf}`);
    fs.writeFile( __dirname + '/img/color.bmp', bitmapBuf);
  });
  emitter.emit('saveBuffer', data);
});

exports.bitmapBuf = bitmapBuf;
