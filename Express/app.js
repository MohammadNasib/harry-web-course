const express=require('express');
const path=require('path');
const fs=require('fs');
const app=express();
const port=80;

// for serving static files

// app.use('/static',express.static('static'));

// set the template engine as pug
// app.set('view engine','pug');

// set the views directory
// app.set('views',path.join(__dirname,'views'))

// our pug demo endpoint
// app.get('/demo',(req,res)=>{
//     res.status(200).render('demo', { title: 'Hey Nasib', message: 'Hi there! This is my first try with pug' })
// })

// app.get('/',(req,res)=>{
//     res.send('This is my first app');
// });

// app.get('/about',(req,res)=>{
//     res.send('This is About page of my first app');
// });

// app.post('/about',(req,res)=>{
//     res.send('This is post About page of my first app');
// });

// app.get('/this',(req,res)=>{
//     res.status(400).send('This page is not found');
// });

// app.listen(port,()=>{
//     console.log(`App has created successfully on port ${port}`)
// })



// Gym website Using raw HTML in Pug template engine 

// EXPRESS specific stuff
// app.use('/static',express.static('static'));
// app.use(express.urlencoded())

// PUG specific stuff
// app.set('view engine','pug');
// app.set('views',path.join(__dirname,'views'))


// Endpoints
// app.get('/',(req,res)=>{
//     let con='This is the title';
//     const extra_string={'title': con,'content':'This is the Content'}
//     res.status(200).render('index.pug',extra_string);
// })

// app.post('/',(req,res)=>{
//     let outputToWrite=`The name of the client is ${req.body.name},age is ${req.body.age},phone number is ${req.body.phone} and address is ${req.body.address} `
//     fs.writeFileSync('output.txt',outputToWrite)
//     const extra_string={'message':'Your form has submited succssefully'}
//     res.status(200).render('index.pug',extra_string);
// })

// start the server
// app.listen(port,()=>{
//     console.log(`App has created successfully on port ${port}`)
// })



// Dance Website Using Pure Pug + NodeJs 





