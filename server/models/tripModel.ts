import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

export interface TripAttributes {
  id?: string;
  user?: string | null;
  description?: string | null;
  type?: string | null;
  coords: string;
  categories?: string | null;
  points?: string | null;
  bottomTripModel?: string | null;
}

class Trip extends Model<TripAttributes> implements TripAttributes {
  public id!: string;
  public user?: string | null;
  public description?: string | null;
  public type?: string | null;
  public coords!: string;
  public categories?: string | null;
  public points?: string | null;
  public bottomTripModel?: string | null;

  // Timestamps in db necessary?
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Trip.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   allowNull: false,
    // },
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
    //   //**Could be removable duplicate or just misnamed  was description*/
    bottomTripModel: {
      type: DataTypes.STRING,
      primaryKey: false,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Trip',
  }
);

export default Trip;
