const mongoose=require ('mongoose')
const rockSchema=new mongoose.Schema({
    rockname:{
        type:String
    },
    speed:{
        type:String
    },
    missioname:{
        type:String
    },
    launchdate:{
        type:Date
    },
    id:{
        type:String
    },
    password:{
        type:String
    },
    newpassword:{
        type:String
    },
    rocket:{
        type:String,
        default:" "
    },
    destination:{
        type:String,
        required:true

    },
    planets:{
        
    }

})

module.exports=mongoose.model('rock',rockSchema)