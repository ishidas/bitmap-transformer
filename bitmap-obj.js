'use strict';
var events = require('events');
var emitter = new events.EventEmitter();

console.log('Am I here?');

emitter.on('createBitmapObj',exports.createBitmapObj = function(bitmap){
  bitmap.headField = bitmap.toString('ascii', 0,2);
  bitmap.size = bitmap.readUInt32LE(2);
  bitmap.startPixelArray = bitmap.readUInt32LE(10);
  bitmap.colorPalette = bitmap.readUInt32LE(46);
  console.dir('headField :' + bitmap.headField);
  console.dir('size :' + bitmap.size);
  console.dir('Pix Array start :' + bitmap.startPixelArray);
  console.dir('color palette :' + bitmap.colorPalette);

});
