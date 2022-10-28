const router = require('express').Router();
const db = require('../../config/connection');
const {Day} = require('../../models');

// router.get('/', (req,res)=> res.send('Welcome'));

// Get days

router.get('/', async (req, res) => {

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

// const todayData={
//     intention: 'I will succeed, I am enough',
//     mood: 'calm',
//     entry: 'today was very tough.  i had a severe case of analysis paralysis'
// }
// let { intention, mood, entry} =todayData;

// Insert into table
// Day.create({
//     intention,
//     mood,
//     entry
// })
// .then(entry => res.redirect('/today'))
// .catch(err=> console.log(err));
// });





module.exports = router;