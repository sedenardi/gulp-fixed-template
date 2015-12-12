var Transform = require('stream').Transform;
var _ = require('lodash');

module.exports = function(templateText, templateFunction) {

  var transformStream = new Transform({objectMode: true});

  var compiled = _.template(templateText);

  transformStream._transform = function(file, encoding, callback) {
    file.contents = new Buffer(compiled(templateFunction(file)));
    callback(null, file);
  };

  return transformStream;
};
