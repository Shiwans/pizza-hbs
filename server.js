const express = require('express');
const app = express();
const path = require('path')
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');


dotenv.config({path: './config/.env'})

app.get('/',(req,res)=>{
    res.render('home')
})

//set template engines
app.engine('.hbs',exphbs.engine({defaultLayout:'main',extname:'.hbs'}))
app.set('views',path.join(__dirname,'./views'))
app.set('view engine','.hbs')


const PORT  = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`))