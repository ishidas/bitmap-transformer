'use strict';
var expect = require('chai').expect;
var fs = require('fs');
var changeColor = require( __dirname + '/../change-color.js');


describe('testing change-color.js file', function(){
  var value;
  before(function(done){
    fs.readFile( __dirname + '/../img/palette-bitmap.bmp', function(err,data){
      value = data;
      console.log('this is the error : ' + err);
      done();
    });
  });
  it('should subtract each array value from the num of max color palette, 256', function(){
    console.log('here is test ' + value);
    expect(value).not.to.be.eql(changeColor.transform(value));
  });
});
