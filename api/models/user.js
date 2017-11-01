"use strict";

module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    user.associate = function(models) {
        user.hasMany(models.notebook, {foreignKey: 'user_id'});
    }

    return user;
};