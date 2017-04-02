const Sequelize=require('sequelize');
const db=require('../dbconnection'); //reference of dbconnection.js

const Technology = db.define('technology', {
  technology_name: Sequelize.STRING,
  rank: Sequelize.INTEGER
}, {
  timestamps: false
});



module.exports=Technology;
