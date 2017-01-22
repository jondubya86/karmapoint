'use strict';
// const Student = require './student'

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    karmapoints: DataTypes.INTEGER,
    bio: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Comment)
      }
    }
  });
  return User;
};