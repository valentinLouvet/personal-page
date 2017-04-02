const express = require('express');
const router = express.Router();
const project = require('../models/project');
const technology = require('../models/technology');
const projectTechnology = require('../models/projectTechnology');



router.get('/:id?', function (req, res, next) {
  if (req.params.id) {
    project.findAll({
      where: { id: 2},
      include: [
        {model:technology, attributes: ['id', 'technology_name', 'rank']}]
    }).then(function (users) {
      res.send(users);
    }).catch(function (err) {
      console.error(err);
      res.status(500).send({ error: 'Something failed!' })
    });
  }
  else {
    project.findAll({include: [
      {model:technology, attributes: ['id', 'technology_name', 'rank']}
    ]}).then(function (users) {
      res.send(users);
    }).catch(function (err) {
      console.error(err);
      res.status(500).send({ error: 'Something failed!' })
    });
  }
});

module.exports = router;

