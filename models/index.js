const User = require('./User');
const Project = require('./Pokemon');
const Pokemon = require('./Pokemon');

User.hasMany(Pokemon, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Project.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Pokemon };
