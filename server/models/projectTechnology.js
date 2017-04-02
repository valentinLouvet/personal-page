/**
 * Created by valentin on 4/2/17.
 */
const Sequelize=require('sequelize');
const db=require('../dbconnection'); //reference of dbconnection.js
const project = require('../models/project');
const technology = require('../models/technology');

const ProjectTechnology = db.define('project_technology', {
  projectID: Sequelize.INTEGER,
  technologyID: Sequelize.INTEGER
}, {
  timestamps: false
});


technology.belongsToMany(project, {through: ProjectTechnology});
project.belongsToMany(technology, {through: ProjectTechnology});



module.exports=ProjectTechnology;
