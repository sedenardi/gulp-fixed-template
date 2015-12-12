
# gulp-fixed-template

Render a single template using the gulp stream files. Uses lodash rendering engine.

## Installation

```js
npm install --save-dev gulp-fixed-template
```

## Example

```js
var fixedTemplate = require('gulp-fixed-template');
var gulp = require('gulp');

// this example replaces every file's contents with its file name.
gulp.task('buildTemplates', function() {
  return gulp.src('./**/*')
    .pipe(fixedTemplate('<%= fileName %>', function(file) {
      var fileParts = file.path.split('/');
      return {
        fileName: fileParts[fileParts.length-1];
      };
    }))
    .pipe(gulp.dest('./'));
});
```

## Options

* `templateText` - required - Template text with placeholders for objects you want replaced.
* `templateFunction` - required - Function that takes in a vinyl file and returns the object to be fed into the templating function.

## License

  MIT
