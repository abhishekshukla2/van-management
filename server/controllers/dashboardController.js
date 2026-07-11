const Student = require("../models/Student");
const Driver = require("../models/Driver");
const Van = require("../models/Van");



// Dashboard Data

const getDashboard = async(req,res)=>{


    try{


        const totalStudents = await Student.countDocuments();


        const totalDrivers = await Driver.countDocuments();


        const totalVans = await Van.countDocuments();




        const vanWise = await Van.aggregate([

            {

                $lookup:{

                    from:"students",

                    localField:"vanNumber",

                    foreignField:"vanNumber",

                    as:"students"

                }

            },


            {

                $project:{

                    vanNumber:1,

                    driverName:1,

                    totalStudents:{
                        $size:"$students"
                    }

                }

            }


        ]);





        res.status(200).json({

            success:true,

            data:{

                totalStudents,

                totalDrivers,

                totalVans,

                vanWise

            }


        });



    }catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }


};





module.exports = {

    getDashboard

};