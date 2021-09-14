const { Model, DataTypes } = require('sequelize');
const dbConnection = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_due: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    completed: {
        type: DataTypes.BOOLEAN,
      },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    dbConnection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'todo',
  }
);

module.exports = Post;