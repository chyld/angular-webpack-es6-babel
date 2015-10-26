"use strict";

module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Sale", {
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    description: DataTypes.TEXT,
    amount: DataTypes.DECIMAL
  });

  return Task;
};
