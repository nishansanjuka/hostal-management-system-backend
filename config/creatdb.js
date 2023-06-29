const sequelize = require('./config');
require('./models');

async function createDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    await sequelize.sync({ force: true });
    console.log('Database tables created successfully.');

    // You can add initial data here if needed.

    process.exit(0);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
}

createDatabase();


