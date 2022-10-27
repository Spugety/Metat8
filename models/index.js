const User = require('./User');
const Day = require('./Day')


User.hasMany(Day, {foreignKey: 'userId'});
Day.belongsTo(User, {foreignKey: 'userId'});


module.exports = { User, Day };

