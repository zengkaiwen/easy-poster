'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/easyposter.min.js');
} else {
  module.exports = require('./lib/easyposter.js');
}
