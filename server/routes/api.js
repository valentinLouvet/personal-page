const express = require('express');
const router = express.Router();

const project = require('./project');
const technology = require('./technology');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.use('/project', project);
router.use('/technology', technology);

module.exports = router;
