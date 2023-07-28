import database from '../../../config/db'
import { UUID, UUIDV4, STRING, ENUM, DATE } from 'sequelize'

// Sequelize Model
const User = database.define(
    'users',
    {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            allowNull: false,
           
        },

        name: {
            type: STRING,
            allowNull: false,
          },


        email: {
            type: STRING,
            allowNull: false,
            unique: true,
        },
        
        password: {
            type: STRING,
            allowNull: false,
        },

        phoneNumber: {
            type: STRING,
            allowNull: false,
            unique: true,
        },
  
        userType:{
            type:ENUM,
            values:["Employee", "Client"],
            allowNull:false,
          },

          status:{
            type: ENUM,
            allowNull:false,
            values:["active", "inactive"],
          },

        // createdAt, lastUpdatedAt and deletedAt managed by Sequelize
        createdAt: {
            type: DATE,
            allowNull: false,
        },

        updatedAt: {
            type: DATE,
            allowNull: true,
        },

        deletedAt: {
            type: DATE,
            allowNull: true,
        },
    },
    {
        // Auto-create timestamps
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        // Enable soft deletes
        paranoid: true,
    },

)


export default User


   