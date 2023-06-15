import { DataTypes } from 'sequelize';
import sequelize from './index';

const LocationPoint = sequelize.define('LocationPoint', {
  id: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: false,
  },
  lat: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: false,
  },
  lng: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: false,
  },
  categories: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: false,
  },
});

export default LocationPoint;
