import { DataTypes } from 'sequelize';
import sequelize from './index';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: true,
  },
  bio: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: true,
  },
  catchphrase: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: true,
  },
  itineraries: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: true,
  },
  categories: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: true,
  },
});

export default User;
