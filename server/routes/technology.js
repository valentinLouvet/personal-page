const express = require('express');
const router = express.Router();
const project = require('../models/project');
const technology = require('../models/technology');
const projectTechnology = require('../models/projectTechnology');


router.get('/:id?', function (req, res, next) {
  if (req.params.id) {
    technology.findAll({
      where: { id: 2},
      include: [
        {model:project, attributes: ['id', 'name', 'description', 'date']}]
    }).then(function (users) {
      res.send(users);
    }).catch(function (err) {
      console.error(err);
      res.status(500).send({ error: 'Something failed!' })
    });
  }
  else {
    technology.findAll().then(function (users) {
      res.send(users);
    }).catch(function (err) {
      console.error(err);
      res.status(500).send({ error: 'Something failed!' })
    });
  }
});

module.exports = router;

