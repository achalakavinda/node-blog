const express = require('express');
const router = express.Router()

const Blog = require('./../models/Blog')

router.get('/',(req,res)=>{
    const locals = {
        title: "Node js blog",
        description: "some description"
    }
    res.render('index',locals)
})

router.get('/about',(req,res)=>{
    res.render('about')
})

module.exports = router;