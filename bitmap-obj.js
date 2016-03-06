'use strict';
var imgBuffer = require( __dirname + '/img-buffer.js');
var bitmap = imgBuffer.bitmap;
var events = require('events');
var emitter = new events.EventEmitter();


emitter.on('createBitmapObj',exports.createBitmapObj = function(bitmap){
  console.log('here here');
  console.dir(bitmap);
  bitmap.headField = bitmap.buf.toString('ascii', 0,2);
  // console.log('I am the: ' + bitmap);
  bitmap.size = bitmap.buf.readUInt32LE(2);
  bitmap.startPixelArray = bitmap.buf.readUInt32LE(10);
  bitmap.colorPalette = bitmap.buf.readUInt32LE(46);
  console.dir('headField :' + bitmap.headField);
  console.dir('size :' + bitmap.size);
  console.dir('Pix Array start :' + bitmap.startPixelArray);
  console.dir('color palette :' + bitmap.colorPalette);

});

// emitter.emit('createBitmapObj', bitmap);
