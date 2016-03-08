# bitmap-transformer
##Creating a Bitmap Image Converter

+palette-bitmap.bmp & non-palette-bitmap.bmp - the original images provided to manipulate.

+img-buffer.js -- this is the entry point. both palette-bitmap.bmp and non-palette-bitmap.bmp files are being read asynchronously in separate functions.

+change-color.js -- This file has function that checks to see whether incoming data has a color palette or not, and if true, data uses the first for loop and if not, it uses the second one.

+black-white.js -- transforms non-palette-bitmap.bmp completely in grey scale. palette-bitmap.bmp transforms into grey scale with a few additional colors.


###How to Look at Different images
####When you want to look at *inverting colors*, do the following in img-buffer.js file:
run
```
npm img-buffer.js invert
```

####When you want to look at *grey scale images*, do the following in img-buffer.js file:
run
```
npm img-buffer.js grey
```
