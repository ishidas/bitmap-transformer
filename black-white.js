'use strict';
var events = require('events');
var emitter = new events.EventEmitter();

//***********************************
// Black and White/gray scale colors
//***********************************
emitter.on('blackAndWhite', exports.blackAndWhite = function(bitmap){
  if(bitmap.colorPalette == 256){
    for(var i = 54; i < 1078; i = i + 4){
      var grayScale = ( bitmap[i]+ bitmap[i+1] + bitmap[i+2])/3;
      bitmap[i] = grayScale;
      bitmap[i+1] = grayScale;
      bitmap[i+2] = grayScale;
      console.log(bitmap[i], bitmap[i+1], bitmap[i+2]);
    }
  } else {
    for(var j = 54; j < bitmap.length; j = j + 3){
      var grayScale2 = ( bitmap[j]+ bitmap[j+1] + bitmap[j+2])/3;
      bitmap[j] = grayScale2;
      bitmap[j+1] = grayScale2;
      bitmap[j+2] = grayScale2;
    }
  }
  return bitmap;
});
