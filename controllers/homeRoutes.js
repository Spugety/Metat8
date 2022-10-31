const router = require('express').Router();
const { application } = require('express');
const { User, Day } = require('../models');


router.get('/', (req, res)=>{
res.render('all');
});

//find a user
router.get('/', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                // email: req.params.email,dated

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
router.get('/profile', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.userId,{
            attributes: { exclude: ['password'] },
            include: [{ model: Day }],
        });
        const user = userData.get({ plain: true });
        res.render('profile', {
            ...user,
            loggedIn: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
router.get('/dashboard', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/profile');
        return;
    }
    res.render('entry');
});
router.get('/entry', (req, res) => {
    
    res.render('all', {layout: 'main'});
});

module.exports = router;