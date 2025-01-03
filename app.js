require("dotenv").config()

//configure ejs layout engine
const express = require('express');
const expressEjsLayouts = require("express-ejs-layouts");
const cookieParser = require('cookie-parser')
const mongoStore = require('connect-mongo')

//configure db connection
const connectDb = require('./server/config/db');
const session = require("express-session");
const MongoStore = require("connect-mongo");

//app configuration
const app = express();
const PORT = 3001 || process.env.PORT;

const MongoConnectUri = "mongodb+srv://"+process.env.mongodb_user+":"+process.env.mongodb_password+"@cluster0.itryt.mongodb.net/itinerantnotes?retryWrites=true&w=majority&appName=Cluster0";

connectDb();

app.use(express.json());

app.use(express.static('public'))
app.use(cookieParser())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized:true,
    store: MongoStore.create({
        mongoUrl: MongoConnectUri
    }),
    
}))

//configure express ejs layouts
app.use(expressEjsLayouts)
app.set('layout','./layouts/main')
app.set('view engine','ejs')


//attach routes
app.use('/',require('./server/routes/main'));
app.use('/admin',require('./server/routes/admin'));


app.use('/api/blogs',require('./server/routes/api/blog'));



app.listen(PORT,()=>{
    console.log(`App listining on port http://localhost:${PORT}`)
})