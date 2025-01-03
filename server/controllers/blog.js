const Blog = require('../models/Blog')

exports.getAllAsync = async (req,res)=>{
    try
    {
        const data = await Blog.find();

        res.json(data);

    }
    catch(error)
    {
        res.json({message: error});
    }
}

exports.saveAsync = async (req,res)=>{
    try
    {
        console.log(req.body)        
        res.json(req.body);
    }
    catch(error)
    {
        res.json({message: error});
    }
}