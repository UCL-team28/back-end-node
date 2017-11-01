"use strict";

module.exports = function(sequelize, DataTypes) {
    var category = sequelize.define("category", {
    	id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
        category: DataTypes.STRING,
    }, {
        timestamps: false,
         freezeTableName: true,
    });

    return category;
};