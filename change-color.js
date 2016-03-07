'use strict';
var events = require('events');
var emitter = new events.EventEmitter();

// Inverting colors
emitter.on('transform', exports.transform = function(bitmap){
  var nums = [];

  for(var i = 1078; i < bitmap.length; i++){
    var max = 32;
    console.log(max - bitmap[i]);
    nums.push(max - bitmap[i]);
  }
  var counter = 1078;
  nums.forEach(function(num){
    console.log('here is ' + counter );
    bitmap.writeUInt32LE(num, counter, counter);
    counter += 1;
    return counter;
  });
});
