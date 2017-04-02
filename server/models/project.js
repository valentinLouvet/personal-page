const Sequelize=require('sequelize');
const db=require('../dbconnection'); //reference of dbconnection.js



const Project = db.define('project', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  date: Sequelize.DATEONLY
  }, {
  timestamps: false
});


module.exports=Project;
