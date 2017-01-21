'use strict';
// const Student = require './student'

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    karmapoints: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // User.hasMany(models.Comment)
      }
    }
  });
  return User;
};