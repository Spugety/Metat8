const router = require('express').Router();
const { User } = require('../models');


//find a user
router.get('/', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.params.email,
                username: req.params.username,
            },
        });
        res.status(200).json(userData)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});
router.get('/profile', async(req, res) => {
    try {
        const userData = await User.findb({

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
});

module.exports = router;