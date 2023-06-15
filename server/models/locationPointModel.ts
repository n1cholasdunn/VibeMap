import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

export interface LocationPointAttributes {
  id: string;
  name: string;
  lat: string;
  lng: string;
  categories: string;
  address: string;
}

class LocationPoint
  extends Model<LocationPointAttributes>
  implements LocationPointAttributes
{
  public id!: string;
  public name!: string;
  public lat!: string;
  public lng!: string;
  public categories!: string;
  public address!: string;

  // Timestamps in db necessary?
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

LocationPoint.init(
  {
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
  },
  {
    sequelize,
    modelName: 'LocationPoint',
  }
);

export default LocationPoint;
