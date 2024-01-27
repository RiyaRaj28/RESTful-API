const express = require("express");
const mongoose = require("mongoose"); 

require("./db/conn.js");
const Student = require("./models/students"); 
const studentRouter = require("./routers/student"); 

const app = express();
const port = process.env.PORT || 3000; 

app.get("/", (req, res) =>
{
    res.send("hello from the other side by riya.");
});

app.use(express.json());
app.use(studentRouter);

// create a new studentsusing promise
// app.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);

//     //promise
//     // user.save().then(() => {
//     //     res.status(201).send(user);
//     // }).catch((e) => {
//     //     res.status(400).send(e);
//     // })
    
//     // res.send("Hello from the other side");
// });

//create new student using async await functions
app.post("/students", async(req, res)=> 
{
    try
    {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
    }
    catch(e) 
    {  
        res.status(400).send(e);
    }
})


//to read the data of the registered students
app.get("/students", async(req, res) => {
    try{
        const studentsData = await Student.find(); 
        res.send(studentsData);
    }catch{
        res.send(e);
    }
})




app.get("/students/:id", async(req, res)=> {
    try
    {
        const _id = req.params.id;
        // console.log(req.params.id);  
        // res.send(req.params.id); 
        //fetch all data by the id of the student 

        const studentData = await Student.findById(_id);
        console.log(studentData);


        //case where the user enters a non existent data
        if(!studentData)
        {
            return res.status(404).send();
        }
        else
        {
            res.send(studentData); 
        }
    }

    catch(e)
    {
        res.send(e);
    }
})


//to delete 
app.delete("/students/id:", async(req,res) =>

{
   
    
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id)
        {
            return res.status(404).send();
        }
        else
        { 

        }
    


})



app.listen(port, () => 
{
    console.log(`connection is setup at ${port}`); 
});


// You do not need express.json() and express.urlencoded()
// for GET requests or DELETE requests.
//  We only need it for post and put request.

//  express.json() is a method inbuilt in express to recognize the incoming
//  request object as a JSON object. This method is called as a middleware 
//  in your application using the code: app.use(express.json());