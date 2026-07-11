const Student = require("../models/Student");
const Van = require("../models/Van");



// Add New Student
// POST /api/students

const addStudent = async (req, res) => {

    try {


        const student = await Student.create(req.body);



        // Update Van Student Count

        if(req.body.vanNumber){

            await Van.findOneAndUpdate(

                {
                    vanNumber:req.body.vanNumber
                },

                {
                    $inc:{
                        totalStudents:1
                    }
                }

            );

        }




        res.status(201).json({

            success:true,

            message:"Student Added Successfully",

            data:student

        });



    } catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }

};






// Get All Students

const getStudents = async(req,res)=>{


    try{


        const students = await Student.find();



        res.status(200).json({

            success:true,

            count:students.length,

            data:students

        });



    }catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};







// Get Single Student

const getStudentById = async(req,res)=>{


    try{


        const student = await Student.findById(
            req.params.id
        );



        if(!student){

            return res.status(404).json({

                success:false,

                message:"Student Not Found"

            });

        }



        res.status(200).json({

            success:true,

            data:student

        });



    }catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};








// Delete Student

const deleteStudent = async(req,res)=>{


    try{


        const student = await Student.findById(
            req.params.id
        );



        if(!student){

            return res.status(404).json({

                success:false,

                message:"Student Not Found"

            });

        }




        // Decrease Van Student Count

        if(student.vanNumber){


            await Van.findOneAndUpdate(

                {
                    vanNumber:student.vanNumber
                },

                {
                    $inc:{
                        totalStudents:-1
                    }
                }

            );

        }




        await student.deleteOne();




        res.status(200).json({

            success:true,

            message:"Student Deleted Successfully"

        });



    }catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};






module.exports = {

    addStudent,

    getStudents,

    getStudentById,

    deleteStudent

};