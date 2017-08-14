'use strict';

const databaseManager = require('../databaseManager');

module.exports = function(userId, email) {
  var session_attributes = intentRequest.session_attributes;
  console.log(userId + ' ' + email);

  databaseManager.saveUserToDatabase(userId, email).then(item => {
    console.log('go snimiv ova: ' + item);
  });
};
