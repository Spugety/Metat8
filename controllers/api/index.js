const router = require('express').Router();
const dayRoutes = require('./dayRoutes');
const userRoutes = require('./userRoutes');


router.use('/day', dayRoutes);
router.use('/user', userRoutes);

module.exports = router;