import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

const registerUser = async (req,res) => {
    try {
        const {name, email, password} = req.body;
        
        if(!name || !email || !password){
            return res.json({success:false, msg:"Missing Details"})
        }

        // const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,10)

        const userData = {
            name,
            email,
            password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()
         
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET_KEY)
         res.json({success:true, token, user: {name:user.name}})
    } catch (error) {
          console.log(error);
          res.json({success:false,msg:error.msg})
          
    }
}

const loginUser = async (req,res) => {
    try {
        const {email, password} = req.body
        const user = await userModel.findOne({email})
        
       if(!user){
            return res.json({success:false, msg:"invalid credentials"})
        }
        
        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.json({success:false, msg:"invalid credentials"})
        }else{
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET_KEY)
             res.json({success:true, token, user: {name:user.name}})
        }
        
    
    } catch (error) {
       console.log(error);
        res.json({success:false,msg:error.msg})
    }
}

const userCredits = async (req, res) => {
    try {
     const {userId} = req.body   

     const user = await userModel.findById(userId)
     res.json({success:true, credits: user.creditBalance, user: {name: user.name}})
    } catch (error) {
        console.log(error);
        res.json({success:false,msg:error.msg})
    }
}


export {
    registerUser,
    loginUser,
    userCredits
}