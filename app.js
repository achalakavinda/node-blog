require("dotenv").config()

//configure ejs layout engine
const express = require('express');
const expressEjsLayouts = require("express-ejs-layouts");

//configure db connection
const connectDb = require('./server/config/db')

//app configuration
const app = express();
const PORT = 3001 || process.env.PORT;

connectDb();

app.use(express.static('public'))

//configure express ejs layouts
app.use(expressEjsLayouts)
app.set('layout','./layouts/main')
app.set('view engine','ejs')


//attach routes
app.use('/',require('./server/routes/main'));
app.use('/admin',require('./server/routes/admin'));
app.use('/api',require('./server/routes/api/blog'));



app.listen(PORT,()=>{
    console.log(`App listining on port http://localhost:${PORT}`)
})