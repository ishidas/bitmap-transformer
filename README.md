# bitmap-transformer
##Creating a Bitmap Image Converter

+palette-bitmap.bmp & non-palette-bitmap.bmp - the original images provided to manipulate.
+img-buffer.js -- this is the entry point. both palette-bitmap.bmp and non-palette-bitmap.bmp files are being read asynchronously in separate functions.
+change-color.js -- This file has function that checks to see whether incoming data has a color palette or not, and if true, data uses the first for loop and if not, it uses the second one.
+black-white.js -- transforms non-palette-bitmap.bmp completely in grey scale. palette-bitmap.bmp transforms into grey scale with a few additional colors.


###How to Look at Different images
####When you want to look at *inverting colors*, do the following in img-buffer.js file:
1. comment out below: line 5
```javascript
  var blackWhite = require( __dirname + '/black-white.js');
```
2. uncomment below: line 4
```javascript
  var changeColor = require( __dirname + '/change-color.js');
```
3. uncomment lines 18 & 34
```javascript
  changeColor.transform(bitmap);
```
4. comment out lines 19 & 35
```javascript
  blackWhite.blackAndWhite(bitmap);
```
5. run  node img-buffer.js in your command line.

####When you want to look at *grey scale images*, do the following in img-buffer.js file:
1. comment out below: line 4
```javascript
  var changeColor = require( __dirname + '/change-color.js');
```
2. uncomment below: line 5
```javascript
  var blackWhite = require( __dirname + '/black-white.js');
```
3. uncomment lines 19 & 35 if commented out
```javascript
  blackWhite.blackAndWhite(bitmap);
```
4. comment out lines 18 & 34
```javascript
  changeColor.transform(bitmap);
```
5. run  node img-buffer.js in your command line.
