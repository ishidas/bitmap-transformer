'use strict';
var events = require('events');
var emitter = new events.EventEmitter();

// function iterateBuffy (bitmap) {
//   for(var i = 0, i < bitmap.Buffer.length, i++)
//
// }
console.log('Changing color');
emitter.on('transform', exports.transform = function(bitmap){
  // var results;

  for(var i = 46; i < 255; i++){
    // bitmap = { bitmap[i] : max - bitmap[i]};
    var max = 255;
    // var offset = i;

    // bitmap[i] = max - bitmap[i];
    // console.dir(Object.keys(bitmap)[i]);

    // Object.keys(bitmap)[i] = max - bitmap[i];
    // return bitmap[i] = max - bitmap[i];

    console.dir(bitmap.writeUInt32LE(max - bitmap[i], i, i));
  }
  console.dir(bitmap);
  return bitmap;
  // return results;
});
