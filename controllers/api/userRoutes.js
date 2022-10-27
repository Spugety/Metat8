const router= require('express').Router();
// const User= require('../../models');

router.get('/', async (req,res)=>{
    res.json('Test User Route');
    try{
        const userData= await User.findAll({
            include: [{ models: Days}]
            
        });
        console.log(userData);
        res.status(200).json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});


module.exports= router;
