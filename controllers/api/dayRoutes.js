const router = require('express').Router();
const db = require('../../config/connection');
//importing Day model
const { Day } = require('../../models');

// router.get('/', (req,res)=> res.send('Welcome'));

// Get days
router.get('/', async (req, res) => {
    res.json('Test Day Route');
    try {
        const allDays = await Day.findAll()
        res.json(allDays);
    }
    catch (err) {
        res.json(err);
    }
});
// Add a daily entry
router.post('/', async (req, res) => {
    try {
        const todayData = await Day.create({ ...req.body });

        res.status(200).json(todayData)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

module.exports = router;