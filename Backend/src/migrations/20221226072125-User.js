'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {

    await queryInterface.createTable('users', {

      id: {
        type: sequelize.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },

      name: {
        type: sequelize.STRING,
        allowNull: false,
      },

      email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      password: {
        type: sequelize.STRING,
        allowNull: false,
      },

      phoneNumber: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      userType:{
        type: sequelize.ENUM,
        values:["Employee", "Client"],
        allowNull:false,
      },

      status:{
        type: sequelize.ENUM,
        allowNull:false,
        values:["active", "inactive"],
      },

      createdAt: {
        type: sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: sequelize.DATE,
        allowNull: true,
      },

      deletedAt: {
        type: sequelize.DATE,
        allowNull: true,
      }
    });

  

  },

  async down(queryInterface, sequelize) {
    await queryInterface.dropTable('users');
  }
  };
