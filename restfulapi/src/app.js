const express = require("express");
const mongoose = require("mongoose"); 

require("./db/conn.js");
const Student = require("./models/students"); 

const app = express();
const port = process.env.PORT || 3000; 

app.get("/", (req, res) => {
    res.send("hello from the other side by riya.");
});

app.use(express.json());

// create a new students
app.post("/students", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
    
    // res.send("Hello from the other side");
});

app.listen(port, () => {
    console.log(`connection is setup at ${port}`); 
});


// You do not need express.json() and express.urlencoded()
// for GET requests or DELETE requests.
//  We only need it for post and put request.

//  express.json() is a method inbuilt in express to recognize the incoming
//  request object as a JSON object. This method is called as a middleware 
//  in your application using the code: app.use(express.json());
