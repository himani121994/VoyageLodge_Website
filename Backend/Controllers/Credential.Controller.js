const UserModel = require('../Models/User.model')

const UserSighup = async (req,res)=>{
    try{
        const {firstname, lastname, uname, mobile, pass, email} = req.body;
        const userInfo = new UserModel({firstname, lastname, uname, mobile, pass, email});
        const saveUserInfo = await userInfo.save();
        res.status(201).json(saveUserInfo);
    } catch (error){
        console.error("Error saving data: ", error);
      res.status(500).send("Error saving data: " + error.message);
    }
  
}

module.exports = {
    UserSighup
}