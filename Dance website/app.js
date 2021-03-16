const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;


// Express stuffs
// app.use(express.static('static',options))
app.use('/static',express.static('static'));


// PUG stuffs
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));


// ENDPOINTS
app.get('/',(req,res)=>{
    let title='Pro Dance Academy';
    const extra_string={'title':title,'content':'This is the content','heading':'This is heading'};
    res.status(200).render('home.pug',extra_string);
});

app.get('/contact',(req,res)=>{
    let title='Pro Dance Academy';
    const extra_string={'title':title,'content':'This is the content','heading':'This is heading'};
    res.status(200).render('contact.pug',extra_string);
});


// START THE SERVER
app.listen(port,()=>{
    console.log(`App is launched successfully here http://localhost`)
})