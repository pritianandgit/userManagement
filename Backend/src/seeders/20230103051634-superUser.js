'use strict';
const { v4: uuidv4 } = require('uuid');
import { hash } from '../common/utils/hashing'
const password = hash("rgbXYZ@9182");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const fakeUserPhoneNumber = '7207779071';
    await queryInterface.bulkInsert('users',
    [
      {
          id:uuidv4(),
          name:'Anjana Bhardwaj',
          email:'anjana.bhardwaj@innobitsystems.com',
          password,
          phoneNumber: fakeUserPhoneNumber,
          userType:'Employee',
          status:'active',
          createdAt: new Date(),
          
       
      },
    ]
  )
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
