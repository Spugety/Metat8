const router = require('express').Router();
//importing User Model
const { User } = require('../../models');

// router.get('/', (req,res)=> res.send('Welcome'));

//Get user data
router.get('/', async (req, res) => {
    res.json('Test User Route');
    try {
        const userData = await User.findAll({
            include: [{ models: Day }]
        });
        console.log(userData);
        res.status(200).json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
//Create new user 
router.post('/', async (req, res) => {
    try {
        const userData = await User.create({ ...req.body });
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(userData);
        });
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});
// Login user
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email,
                username: req.body.username,
            },
        });
        if (!userData) {
            res.status(400).json({ message: 'Invalid Login information. Please try again!' });
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Invalid Login information. Please try again!' });
            return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json({ user: userData, message: 'Welcome! You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
// Logout user
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(()=>{
            res.status(200).end();
        });
    }else {
        res.status(400).end();
    }
});
module.exports = router;
