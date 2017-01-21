'use strict';
// const Student = require './student'

module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    longitude: DataTypes.INTEGER,
    latitude: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Company.hasMany(models.Comment)
      }
    }
  });
  return Company;
};
