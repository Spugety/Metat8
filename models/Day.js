const { Model, DataTypes } = require('sequelize');
const sequelize= require('../config/connection');


class Day extends Model {}

Day.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        intention: {
            type: DataTypes.STRING,
            allowNull: false,
           
        },
       mood: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        entry: {
            type: DataTypes.STRING,
            allowNull: false,
           
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {model: 'user', key: 'id'},

        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'day',
    }
    ),
    module.exports=Day;