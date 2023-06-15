import { DataTypes } from 'sequelize';
import sequelize from './index';

const Trip = sequelize.define('Trip', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  user: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: true,
  },
  coords: {
    type: DataTypes.TEXT,
    primaryKey: false,
    allowNull: false,
  },
  categories: {
    type: DataTypes.TEXT,
    primaryKey: false,
    allowNull: true,
  },
  points: {
    type: DataTypes.TEXT,
    primaryKey: false,
    allowNull: true,
  },
  //**Could be removable duplicate or just misnamed  was description*/
  bottomTripModel: {
    type: DataTypes.STRING,
    primaryKey: false,
    allowNull: true,
  },
});

export default Trip;
