import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config-database';

export const Person = sequelize.define('Persons', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        validate: {
            isNumeric: true,
            len: [1, 9]
        },
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        },
        unique: true
    }
}, {
    timestamps: true
});
