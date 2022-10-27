const router= require('express').Router();
const db = require('../../config/connection');
const Day = require('../../models/Days');

// router.get('/', (req,res)=> res.send('TODAY'));

// Get today entry

router.get('/',(req,res)=>
    Day.findAll()
    .then(entries=>{
        res.render('entry', {
            entries
        });
        // console.log(entries);
        // res.sendStatus(200);
    })
    .catch(err=>console.log(err)));

// Add a today entry
router.post('/add', async (req,res)=>{
    try {
        const todayData= await Day.create({...req.body});

        res.status(200).json(todayData)
         
    }
    catch (err){
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





module.exports=router;