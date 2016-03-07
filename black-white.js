'use strict';
var events = require('events');
var emitter = new events.EventEmitter();

// Black and White colors
emitter.on('blackAndWhite', exports.blackAndWhite = function(bitmap){
  var nums = [];

  for(var i = 54; i < 1078; i++){
    var constantNum = 0.2;
    console.log(Math.floor(bitmap[i] * constantNum));
    nums.push(Math.floor(bitmap[i] * constantNum));
  }
  var counter = 54;
  nums.forEach(function(num){
    // console.log('here is ' + counter );
    // var newNum = Math.floor(num * constantNum);
    // console.log('sum of this is : ' + test);
    bitmap.writeUInt32LE(num, counter, counter);
    counter += 1;
    return counter;
  });
});
