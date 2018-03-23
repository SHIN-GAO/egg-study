'use strict';
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  const Movie = app.model.define('post', {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING(100),
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    tableName: 'vender_user',
    timestamps: false,
  });
  return Movie;
};
