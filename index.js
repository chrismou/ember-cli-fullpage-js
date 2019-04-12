'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: require('./package').name,

  included: function() {
    this._super.included.apply(this, arguments);
    const app = this._findHost();

    const config = app.options['ember-cli-fullscreen-js'] || {};

    // If specified, include the extra library files
    if (config.includeJqueryEasings) {
      app.import('vendor/vendors/easings.js');
    }
    if (config.includeScrollOverflow) {
      app.import('vendor/vendors/scrolloverflow.js');
    }

    app.import('vendor/dist/fullpage.js');
    app.import('vendor/dist/fullpage.min.css');
    app.import('vendor/dist/fullpage.extensions.min.js');

  },
  treeForVendor() {
    let fullpageJSPath = path.join(this.app.project.root, 'node_modules', 'fullpage.js');
    return new Funnel(fullpageJSPath, {
        files: ['dist/fullpage.js', 'dist/fullpage.min.css','dist/fullpage.extensions.min.js', 'vendors/scrolloverflow.js', 'vendors/easings.js']
      });
  },
};
