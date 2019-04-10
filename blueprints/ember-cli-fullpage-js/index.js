/* eslint-env node */
module.exports = {
  description: 'Exports fullpage.js library',

  afterInstall() {
    return this.addPackageToProject('fullpage.js');
  }
};

