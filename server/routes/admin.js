const express = require('express');
const router = express.Router()

const Blog = require('../models/Blog')
const User = require('../models/User')

const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtScreate = process.env.jwt_secret

const adminLayout = '../views/layouts/admin'

const authMiddleware = (req, res, next) => {
    const token = req.token;

    if(!token)
    {
        return res.status(401)
        .json({message:"invalid"})
    }

    try
    {
        const decode = jwt.verify(token, jwtScreate)
        req.userId = decode.userId
        next()
    }
    catch (error)
    {
        return res.status(401)
        .json({message:"invalid"})
    }

}

router.get('/',authMiddleware,(req,res)=>{
    const locals = {
        title: "Node js blog",
        description: "some description"
    }
    res.render('admin/index',{locals, layout:adminLayout})
})



router.post('/register',async (req,res) => {

    const {username, password} = req.body;
    const hashPassword = await bycrypt.hash(password,10)

    try
    {
        const user = await User.create(
            {
                username: username,
                password: hashPassword
            }
        )

        res.status(201).json({
            message:"user created"            
        })
    }   
    catch (error)
    {
        if(error.code === 11000)
        {
            res.status(409).json({
                message:"user already in use"            
            })
        }

        res.status(500).json({
            message:"internal server error"            
        })
    }

})

router.post('/login',async (req,res) => {
    
    const {username, password} = req.body;
    const hashPassword = await bycrypt.hash(password,10)

    try
    {
        const user = await User.findOne({username});

        if(!user)
        {
            res.status(401).json({
                message:"invalid credentials"            
            })
        }

        const isPasswordValid = await bycrypt.compare(password, user.password)

        if(!isPasswordValid)
            {
                res.status(401).json({
                    message:"invalid credentials"            
                })
            }

        const token = jwt.sign({userId: user._id},jwtScreate);

        res.cookie('token', token,{httpOnly: true})
        
    }   
    catch (error)
    {
        if(error.code === 11000)
        {
            res.status(409).json({
                message:"user already in use"            
            })
        }

        res.status(500).json({
            message:"internal server error"            
        })
    }

})



module.exports = router;