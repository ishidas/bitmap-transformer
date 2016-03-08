'use strict';
var events = require('events');
var emitter = new events.EventEmitter();

//**************************************************************
// Inverting colors on both non-palette-bitmap & palette-bitmap.
// If bitmap Object has color palette of 256, it uses first for loop,
//otherwise, uses the second one.
//**************************************************************
emitter.on('transform', exports.transform = function(bitmap){
  var max = 256;
  if(bitmap.colorPalette == 256){
    for(var i = 54; i < 1078; i++){
      bitmap[i] = max - bitmap[i];
    }
  } else {
    for(var j = 54; j < bitmap.length ; j++){
      bitmap[j] = max - bitmap[j];
    }
  }
  return bitmap;
});
