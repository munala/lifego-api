module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    displayName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    pictureUrl: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    privacy: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    social: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    reminders: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    userId: {
      allowNull: true,
      type: Sequelize.STRING,
    },
  }),
  down: queryInterface => queryInterface.dropTable('users'),
};
