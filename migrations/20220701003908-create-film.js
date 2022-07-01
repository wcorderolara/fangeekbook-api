'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Films', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.NUMBER
      },
      category: {
        type: Sequelize.NUMBER
      },
      genreType: {
        type: Sequelize.NUMBER
      },
      originalLanguage: {
        type: Sequelize.NUMBER
      },
      recordingCountry: {
        type: Sequelize.NUMBER
      },
      ratingId: {
        type: Sequelize.NUMBER
      },
      distributorId: {
        type: Sequelize.NUMBER
      },
      runtime: {
        type: Sequelize.NUMBER
      },
      budget: {
        type: Sequelize.NUMBER
      },
      sinopsis: {
        type: Sequelize.STRING
      },
      boxOffice: {
        type: Sequelize.NUMBER
      },
      rate: {
        type: Sequelize.NUMBER
      },
      trailerUrl: {
        type: Sequelize.STRING
      },
      releaseDate: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Films');
  }
};