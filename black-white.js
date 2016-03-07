'use strict';
var events = require('events');
var emitter = new events.EventEmitter();

// Black and White/gray scale colors
emitter.on('blackAndWhite', exports.blackAndWhite = function(bitmap){

  for(var i = 54; i <= 1078; i = i + 4){
    // console.dir(bitmap);
    var grayScale = ( bitmap[i]+ bitmap[i+1] + bitmap[i+2])/3;
    // var constantNum = 0.2;
    bitmap[i] = grayScale;
    bitmap[i+1] = grayScale;
    bitmap[i+2] = grayScale;
    console.log(bitmap[i], bitmap[i+1], bitmap[i+2]);

  }
  console.dir(bitmap);
  return bitmap;
});

// function createNewArray (){
//   for( var i = 54; i < 1078; i++){
//
//   }
// }
