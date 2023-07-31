const router = require('express').Router();
const courseRoutes = require('./api/courseRoutes');
const studentRoutes = require('./api/studentRoutes');

router.use('/courses', courseRoutes);
router.use('/students', studentRoutes);

module.exports = router;
