import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import sequelize from './models';
import router from './router';

const app = express();
const port = 3333;

console.log(process.env.port);
app.use(cors());
app.use(express.json());
app.use('/', router);

(async () => {
  try {
    await sequelize.sync();
    console.log('Connected to the db at port 5433 🟦');
    // Start server
    app.listen(port, () => {
      console.log(`Server listening on port ${port} 🟩`);
    });
  } catch (error) {
    console.error('NOT CONNECTED to the database:', error);
  }
})();
