'use strict';
var events = require('events');
var emitter = new events.EventEmitter();

// Black and White colors
emitter.on('blackAndWhite', exports.blackAndWhite = function(bitmap){
  var nums = [];

  for(var i = 1078; i < bitmap.length; i++){
    // var constantNum = 0.2;
    console.log(Math.floor(bitmap[i] = 31));
    nums.push(Math.floor(bitmap[i] = 31));
  }
  var counter = 1078;
  nums.forEach(function(num){
    // console.log('here is ' + counter );
    var test = Math.floor(num);
    // console.log('sum of this is : ' + test);
    bitmap.writeUInt32LE(test, counter, counter);
    counter += 1;
    return counter;
  });
});
