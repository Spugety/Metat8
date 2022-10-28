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
        res.status(200).json(userData)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

//setting up log in session
req.session.save()

module.exports = router;
