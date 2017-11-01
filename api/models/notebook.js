"use strict";

module.exports = function(sequelize, DataTypes) {
    var notebook = sequelize.define("notebook", {
    	id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
        name: DataTypes.STRING
    }, {
        timestamps: false,
         freezeTableName: true,
    });

    notebook.associate = function(models) {
        notebook.belongsTo(models.user, {foreignKey: 'user_id'});
    }

    notebook.associate = function(models) {
        notebook.hasMany(models.note, {foreignKey: 'notebook_id'});
    }

    return notebook;
};