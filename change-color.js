'use strict';
var events = require('events');
var emitter = new events.EventEmitter();

// Inverting colors
emitter.on('transform', exports.transform = function(bitmap){
  var nums = [];
  console.dir(bitmap);
  for(var i = 54; i < 1078; i++){
    var max = 256;
    // console.log(max - bitmap[i]);
    nums.push(max - bitmap[i]);
  }
  var counter = 54;
  nums.forEach(function(num){
    // console.log('here is ' + counter );
    bitmap.writeUInt32LE(num, counter, counter);
    counter += 1;
    return counter;
  });
});
