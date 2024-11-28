const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Messages = sequelize.define('message', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  messagecontent: {
    type: Sequelize.STRING,
    allowNull: false
  },
 username:{
    type: Sequelize.STRING,
    allowNull: false

 }
 
});



module.exports = Messages;
