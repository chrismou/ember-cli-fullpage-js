'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: require('./package').name,

  included: function(app) {
    this._super.included(app);
    app.import('vendor/fullpage.js');
    app.import('vendor/fullpage.min.css');
    app.import('vendor/fullpage.extensions.min.js');

  },
  treeForVendor() {
    let fullpageJSPath = path.join(this.app.project.root, 'node_modules', 'fullpage.js', 'dist');
    return new Funnel(fullpageJSPath, {
      files: ['fullpage.js', 'fullpage.min.css','fullpage.extensions.min.js']
    });
  },
};
