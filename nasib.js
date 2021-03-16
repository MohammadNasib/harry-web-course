// var a = 15;
// var b = 5;
// console.log('The value of a + b = ' + (a + b));
// console.log('The value of a - b = ' + (a - b));
// console.log('The value of a * b = ' + (a * b));
// console.log('The value of a / b = ' + (a / b));
// console.log('The value of a ** b = ' + (a ** b));
// console.log('The value of a ++ = ' + (a++));
// console.log('The value of ++a = ' + (++a));
// console.log('The value of a-- = ' + (a--));
// console.log('The value of --a = ' + (--a));



// strings in java script

// var s = 'nasib';
// var t = 'is a';
// var r = 'good boy';
// var v = `nasib's brother is Tansir`;
// var na = `${s} is a nice person `
// var len = s.length
// console.log(s)
// console.log(s + t + r);
// console.log(na);
// console.log(`The length of name is ${len}`);
// console.log('Mohammmad Nasib \n Nasib')

// document.getElementById('content').innerHTML = '<h1>this is h1 heading</h1>'



// String Functions in JavaScript

// var str = 'this is a string'

// First occurence of a substring
// var position = str.indexOf('is');
// console.log(position)

// Last occurence of a substring
// position = str.lastIndexOf('is');
// console.log(position)

// Substring from a string
// var substr = str.slice(1, 7);
// var substr = str.substring(1, 7);
// var substr1 = str.substr(1, 3);
// console.log(substr1)


// replace function
// var replaced = str.replace('string', 'nasib')
// console.log(str)
// console.log(replaced)
// console.log(str)

// upper and lower case
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.toLocaleUpperCase())
// console.log(str.toLocaleLowerCase())


// concat function is like '+' operator.'+' opertator is the best choice
// var newstring = str.concat('Nasib')
// console.log(newstring)


// trim function removes the white spaces from strarting and ending

// var strWithWhitespaces = "   this contains        whitespaces   ";
// console.log(strWithWhitespaces)
// console.log(strWithWhitespaces.trim())


// charAt fuction is used to locate the character using the index

// charCodeAt fuction gives us the code of the character

// var char2 = str.charAt(2);
// var char2 = str.charCodeAt(2); // Not very important
// console.log(char2)


// best way to locate the character using the index

// console.log(str[2])





// Scope, If -else Conditionals & Switch Case in JavaScript


// var string1 = "This is a string";
// var string1 = "This is a string2";
// console.log(string1);
// let a = "u";
// {
//     let a = "u6";
//     console.log(a)
// }
// console.log(a)




// const a = 'this cannot be changed'
// console.log(a)





// let age = 5;
// if (age >= 18) {
//     console.log('You are eligible for this game')
// }
// else if (age == 5) {
//     console.log(`ur age is ${age}`)
// }
// else {
//     console.log('You are not eligible for this game')
// }



// switch case

//         var days = 'saturday';
//     switch (days) {
//         case 'saturday':
//             console.log(`Today is ${days} `)

//             break;
//         case 'monday':
//             console.log(`Today is ${days} `)

//             break;
//         case 'thursday':
//             console.log(`Today is ${days} `)

//             break;

//         default:
//             console.log('This is neither saturday nor monday nor thursday ')
//             break;
//     }





//     < !--Arrays & Objects in JavaScript-- >



//         let employee = {
//             name: "Harry",
//             salary: 10,
//             channel: "CodeWithHarry",
//             "channel 2": "ProgrammingWithHarry",
//         }
//     console.log(employee.name);


//     array object

//     let names = [1, 2, 4, "Harry", undefined];
//     let names2 = new Array(41, 2, 4, "Harry", undefined);
//     names2 = names2.sort()
//     names2.push('This is pushed')
//     console.log(names2)
//     name3 = new Array(23);
//     console.log(name3)







//     Functions in JavaScript


//     function greet(name) {
//         console.log(`${name} is a good boy`)
//     }


//     let name1 = 'Nasib';
//     let name2 = 'Tansir';
//     let name3 = 'Hasib';
//     greet(name1);
//     greet(name2);
//     greet(name3);




//     Interaction - Alert, Prompt, Confirm


//     alert funtion

//     alert('This is a message');

//     promt function

//         let name = prompt('What is ur name?', 'Guest');
//     console.log(name)


//     confirm function

//         let del_post = confirm('Do u really want to delete this post ?')
//     console.log(del_post)




//     for, while, forEach, Do While Loops

//     let i = 0;
//     for (i = 0; i < 3; i += 1) {
//         console.log(i)
//     }

// classical for loop

// let names = ['Nasib', 'Tansir', 'Hasib']
//     for (let index = 0; index < names.length; index++) {
//         console.log(`Hi ${names[index]}`);
//     }

// modern forEach loop

// names.forEach(function f(element) {
//     console.log(`Hi ${element}`)
// })

// function forEach(array){
//     index=0
//     for (index=0;index<array.length;index+=1){
//         console.log(`Hi ${names[index]}`)
//     }
// }

// forEach(names)



//  modern forOf loop

// for (i of names){
//     console.log(`Hi ${i}`)
// }


// forIn loop

// let employee={
//     name:'Nasib',
//     age:17,
//     salary:500,
// }

// for (key in employee){
//     console.log(`The ${key} of employee is ${employee[key]}`);
// }



// while loop in js

// let i=0;
// while (i<5){
//     console.log(`${i} is less than 5`);
//     i+=1;
// }



// do while loop 
// let j = 35;
// do {
//     console.log(`${j} is less than 40 and we are inside of do while loop`);
//     j += 1;
// } while (j < 40);



// Navigating The DOM |

// let main = document.getElementById('main');
// console.log(main)

// let containers = document.getElementsByClassName('container');
// console.log(containers);

// let sel = document.querySelector('#nav>li');
// console.log("Selector returns ", sel)


// let sel=document.querySelector('#nav>li');
// console.log(sel)


// let sel = document.querySelectorAll('#nav>li');
// console.log("Selector returns ", sel)




// Events & Listening to Events

// let para = document.getElementById('para');
// para.addEventListener('mouseover', function run() {
//     console.log('Mouse Inside')
// });

// para.addEventListener('mouseout', function run() {
//     console.log('Mouse now went outside')
// });



// function toggleHide() {
//     let para = document.getElementById('para');
//     if (para.style.display != 'none') {
//         para.style.display = 'none';
//     }
//     else {
//         para.style.display = 'block';
//     }
// }




// setInterval & setTimeOut

// setTimeout --> Alllows us to run the function once after the interval of time
// clearTimeout --> Alllows us to run the function repeatedly after the interval of time


// function greet(name, byeText) {
//     console.log('Good Morning ' + name+ ' ' +  byeText)
// }

// setTimeout(greet, 5000, 'Nasib', 'Take Care')


// timeOut = setTimeout(greet, 5000, "Harry", "Take Care");
// console.log(timeOut);

// clearTimeout(timeOut);


// intervalId = setInterval(greet, 1000, "Harry", "Good Night");
// clearInterval(intervalId);   




// Date & Time In JavaScript

// let now = new Date();
// console.log(now);

// let dt = new Date(1000);
// console.log(dt);

// // let newDate = new Date("2029-06-13");
// // console.log(newDate)

// let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds);
// let newDate = new Date(3020, 4, 6, 9, 3, 2, 34);
// console.log(newDate);

// let yr = newDate.getFullYear();
// console.log("The year is ", yr);

// let dat = newDate.getDate();
// console.log("The date is ", dat);

// let month = newDate.getMonth();
// console.log("The month is ", month);

// let hours = newDate.getHours();
// console.log("The hours is ", hours);

// newDate.setDate(8);
// newDate.setMinutes(29);
// console.log(newDate)
// setInterval(updateTime, 1000);

// function updateTime() {
//     time.innerHTML = new Date();
// }


// Arrow Functions In JavaScript


// Arrow function
// let greet =  ()=> {
//     console.log('Good morning');
// }

// let greet = () => console.log('Good morning');


// let sum2 = (a, b)=>{
//     return a+b;
// };

// let sum2 = (a, b) => a + b;
// let half = a => a / 2;

// function greet() {
//     console.log('Good morning');
// }

// greet();
// setTimeout(() => {
//     console.log("We are inside settimeout");
// }, 3000);



// important function

// let obj1 = {
//     greeting: 'Good Morning',
//     names: ['Nasib', 'Hasib', 'Tansir'],
//     speak() {
//         this.names.forEach((name) => {
//             console.log(this.greeting + ' ' + name)
//         })
//     }
// }

// obj1.speak()



// Math Object In JavaScript


// Printing the Math Object
// let m = Math;
// console.log(m)

// Printing the constants from Math Object
// console.log("The value of Math.E is ", Math.E)
// console.log("The value of Math.PI is ", Math.PI)
// console.log("The value of Math.LN2 is ", Math.LN2)
// console.log("The value of Math.SQRT1_2 is ", Math.SQRT1_2)
// console.log("The value of Math.LOG2E is ", Math.LOG2E)

// Printing the Functions from Math Object 
// let a = 34.64534;
// let b = 89;

// console.log("The value of a and b is ", a, b);
// console.log("The value of a and b rounded is ", Math.round(a), Math.round(b));

// console.log("3 raised to the power of 2 is ", Math.pow(3, 2))
// console.log("2 raised to the power of 12 is ", Math.pow(2, 12))
// console.log("1 raised to the power of 2 is ", Math.pow(1, 2))

// console.log("Square root of 36 is ", Math.sqrt(36))
// console.log("Square root of 64 is ", Math.sqrt(64))
// console.log("Square root of 50 is ", Math.sqrt(50))

// Ceil and floor
// console.log("5.8 rounded up to nearest integer is ", Math.ceil(5.8))
// console.log("5.8 rounded down to nearest integer is ", Math.floor(5.8))

// Abs function
// console.log("Absolute value of 5.66 is  ", Math.abs(5.66))
// console.log("Absolute value of -5.66 is  ", Math.abs(-5.66))

// Trinonometric Functions
// console.log("The value of sin(pi) is ", Math.sin(Math.PI / 2))
// console.log("The value of tan(pi) is ", Math.tan(Math.PI / 2))
// console.log("The value of cos(pi) is ", Math.cos(Math.PI / 2))

// Min and max functions
// console.log("Minimum value of 4, 5, 6 is ", Math.min(4, 5, 6));
// console.log("Minimum value of 14, 5, 16 is ", Math.min(14, 5, 16));
// console.log("Maximum value of 4, 5, 6 is ", Math.max(4, 5, 6));
// console.log("Maximum value of 14, 5, 16 is ", Math.max(14, 5, 16));

// Generating a random number
// let r = Math.random();
// Random number b/w (a, b) = a + (b-a)*Math.random()
// let a1 = 50;
// let b1 = 60;
// let r50_60 = a1 + (b1 - a1) * Math.random();
// console.log("The random number is ", r)
// console.log("The random number is ", r50_60)



// Working with JSON in JavaScript 

// let jsonObj = {
//     name: "Harry",
//     channel: "CWH",
//     friend: "Rohan Das",
//     food: "Bhindi" //#bhindiLoverSquad
// }
// console.log(jsonObj);
// let myJsonStr = JSON.stringify(jsonObj);
// console.log(myJsonStr);

// myJsonStr = myJsonStr.replace('Harry', 'Larry');
// console.log(myJsonStr)

// newJsonObj = JSON.parse(myJsonStr);
// console.log(newJsonObj)




// backend starts here

// console.log('Hi There');

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     // res.end('Hi');
//     res.end(`<!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Pseudo selectors & more designing</title>
//       <style>
//           .container{
//               border: 2px solid red;
//               background-color: rgb(223, 245, 201);
//               padding: 34px;
//               margin: 34px auto;
//               width: 666px;
//           }
//           a{
//               text-decoration: none;
//               color: black;
//           }
//           a:hover{
//               color: rgb(5, 0, 0);
//               background-color: rgb(221, 166, 38);
//           }
//           a:visited{
//               background-color: yellow;
//           }
//           a:active{
//               background-color:darkblue;
//           }
//           .btn{
//               font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//               font-weight: bold;
//               background-color: crimson;
//               padding:6px;
//               border: none;
//               cursor:pointer;
//               font-size: 13px;
//               border-radius: 4px;
//           }
//           .btn:hover{
//               color:darkgoldenrod;
//               background-color:rgb(223, 245, 201);
//               border: 2px solid black;
//           }
//       </style>
//   </head>
//   <body>
//       <div class="container" id="cont1">
//           <h3>This is my heading</h3>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, reprehenderit. Quam culpa eius aliquam id cumque saepe, provident odio sed eos quia nihil modi error voluptate vero autem quibusdam aperiam exercitationem! Quam, consequuntur velit.</p>
//           <a href="https://yahoo.com" class="btn">Read more</a>
//           <button class="btn">Contact us</button>
//       </div>
//   </body>
//   </html>`);
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });



// Node.Js Modules 

// const fs=require('fs');
// let text=fs.readFileSync('node-pr.txt','utf-8');
// text=text.replace('PRACTICE',"Owner's name is Mohammad Nasib");
// text=fs.d
// console.log('The content of the file is :');
// console.log(text)



// Blocking vs Non-Blocking execution


// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire


// const fs = require("fs");
// fs.readFile('node-pr.txt', "utf-8", (err, data) => {
//     console.log(data);
// });
// console.log("This is a message");




// Serving HTML Files using NodeJs

// const http=require('http');
// const fs =require('fs');
// const fileContent=fs.readFileSync('project_1/gym.html','utf-8');

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text/html'});
//     res.end(fileContent)
// });

// server.listen(80,'127.0.0.1',()=>{
//     console.log(`Server running at http://127.0.0.1`)
// })



// Creating a Custom Backend Using NodeJs

// const http = require('http');
// const fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 3000;
// const home = fs.readFileSync('project_1/first_server.html');
// const services = fs.readFileSync('project_1/f_cal.html');
// const about_us = fs.readFileSync('project_1/about.html');
// const contact_us = fs.readFileSync('project_1/contact.html');
// const join_now = fs.readFileSync('project_1/join.html');

// const server = http.createServer((req, res) => {
//     url = req.url;
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/html');

//     if (url == '/') {
//         res.end(home);
//     }
//     else if (url == '/fitness_calculator') {
//         res.end(services);
//     }
//     else if (url == '/about') {
//         res.end(about_us);
//     }
//     else if (url == '/contact') {
//         res.end(contact_us);
//     }
//     else if (url == '/join') {
//         res.end(join_now);
//     }
//     else {
//         res.statusCode = 404;
//         res.end("<h1>404 not found</h1>");
//     }
// })

// server.listen(`${port}`, `${hostname}`, () => {
//     console.log(`Server running at http://${hostname}:${port}/`)
// })





//  Creating Custom Modules 

// const average = require('./tut68');
// console.log(average([3, 5]));
// const mod = require('./tut68');
// console.log(mod.fun([3, 5]));
// console.log(mod.name);
// console.log(mod.name);



// npm: The Node Package Manager Tutorial 
// This file is in tut69 folder
console.log('Mohammad Nasib')





