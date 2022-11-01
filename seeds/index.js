const sequelize = require("../config/connection");
const { User } = require("../models");

async function seedDatabase() {
    await sequelize.sync({force: true});
    const testUser= [
        {
        username: 'testuser123',
        // email: 'testuser123@gmail.com',
        password: 'testpass123',
        },
    ];
        User.bulkCreate(testUser);
}

seedDatabase();


module.exports = seedDatabase;
