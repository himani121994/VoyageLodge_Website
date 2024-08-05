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

const userlogin = async(req,res)=>{
  const {gmail,pass} = req.body;
  try{
     const useremail = await UserModel.findOne({gmail:gmail});
     if(!useremail){
        return res.status(401).json({message:"Invalid credentials"});
     }
    //  const passwordMatch = await UserModel.findOne(pass, user.password);
    //     if (!passwordMatch) {
    //         return res.status(401).json({ message: 'Invalid credentials' });
    //     }

    //  }
    res.status(200).json({ success: true});
    
  } catch(error){
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
module.exports = {
    UserSighup,userlogin
}