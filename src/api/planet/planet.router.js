const express=require('express');
const app = require('../../app');
const Model=require('./planet.models.js')
 const userplanet= require('./file.js')
 const mongoose=require ('./db.js')
 
const router=express.Router();


router.get('/', (res,req)=>{
    const user=new Model({
        planatename:req.body.planetname,
        rockename:req.body.rocketname,
        missionname:req.body.missionname,
        launchdate:req.body.launchdate,
        speed:req.body.speed
    })
    user.save().then(()=>{
      res.send('rocket is  launch')

    })

   

    res.status(200).json(planets)

})
 module.exports=router