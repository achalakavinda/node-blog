const express = require('express');
const router = express.Router()

const Blog = require('../../models/Blog')

router.get('/blogs',async (req,res)=>{

    try
    {
        const data = await Blog.find();

        res.json(data);

    }
    catch(error)
    {
        console.log(error);
        res.json({message: error});
    }
    
});

module.exports = router;