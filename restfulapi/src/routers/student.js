const express = require("express");
const router = new express.Router(); 

//define the router

// router.get("/", (req,res)=> {
//     res.send("Hello whatsUp guys"); 
// }); 

// create new student using async await functions
router.post("/students", async(req, res)=> 
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
router.get("/students", async(req, res) => {
    try{
        const studentsData = await Student.find(); 
        res.send(studentsData);
    }catch{
        res.send(e);
    }
})




router.get("/students/:id", async(req, res)=> {
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
router.delete("/students/id:", async(req,res) =>{

try{  
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id)
        {
            return res.status(404).send();
        }
        res.send(deleteStudent); 
    }catch(e){
        res.status(500).send(e);
    }
    
})

module.exports = router;