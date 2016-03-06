'use strict';
var events = require('events');
var emitter = new events.EventEmitter();

// function iterateBuffy (bitmap) {
//   for(var i = 0, i < bitmap.Buffer.length, i++)
//
// }

emitter.on('transform', exports.transform = function(bitmap){
  for(var i = 10; i < bitmap.length; i++)
    // var test = Object.keys(bitmap[i]);
    console.dir(Object.keys(bitmap)[i]);
  Object.keys(bitmap)[i] = 255 - bitmap[i];

});
