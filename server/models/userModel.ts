import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

interface UserAttributes {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  image?: string | null;
  bio?: string | null;
  catchphrase?: string | null;
  itineraries?: string | null;
  categories?: string | null;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public surname!: string;
  public email!: string;
  public password!: string;
  public image?: string | null;
  public bio?: string | null;
  public catchphrase?: string | null;
  public itineraries?: string | null;
  public categories?: string | null;

  // Timestamps in db necessary?
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
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
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export default User;
