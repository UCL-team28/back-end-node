"use strict";

module.exports = function(sequelize, DataTypes) {
    var note = sequelize.define("note", {
    	id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
        created: DataTypes.DATE,
        name: DataTypes.STRING,
        content: DataTypes.STRING,
        media: DataTypes.STRING,
        media_type: DataTypes.STRING,
    }, {
        timestamps: false,
         freezeTableName: true,
          underscored: true,
    });

    note.associate = function(models) {
        note.belongsTo(models.notebook, {foreignKey: 'notebook_id'});
    }

    note.associate = function(models) {
        note.hasOne(models.category, {foreignKey: 'category_id'});
    }

    return note;
};