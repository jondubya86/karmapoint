'use strict';
// const Student = require './student'

module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    comments: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    task: DataTypes.STRING,
    hours: DataTypes.INTEGER

  }, {
    classMethods: {
      associate: function(models) {
        Comment.belongsTo(models.Company)
      }
    }
  });
  return Comment;
};