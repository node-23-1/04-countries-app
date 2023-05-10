const City = require('./City');
const Continent = require('./Continent');
const Country = require('./Country');
const User = require('./User');

User.belongsTo(Country);
Country.hasMany(User);

City.belongsTo(Country);
Country.hasMany(City);

Country.belongsTo(Continent);
Continent.hasMany(Country);
