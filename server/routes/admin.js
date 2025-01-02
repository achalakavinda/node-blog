const express = require('express');
const router = express.Router()

const Blog = require('../models/Blog')

const adminLayout = '../views/layouts/admin'

router.get('/',(req,res)=>{
    const locals = {
        title: "Node js blog",
        description: "some description"
    }
    res.render('admin/index',{locals, layout:adminLayout})
})

module.exports = router;