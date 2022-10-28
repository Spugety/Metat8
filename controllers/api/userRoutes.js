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
router

router.post('/login', async (req,res)=>{
    try{
        const userData = await User.findOne({
            where: {
                email: req.body.email,
                username: req.body.username,
            },
        });
        if(!userData){
            res.status(400).json({message: 'Incorrect Login information. Please try again!'});
        }
    }
    )

module.exports = router;
