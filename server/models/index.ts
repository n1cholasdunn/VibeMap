import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('VibeMap', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});

export default sequelize;
