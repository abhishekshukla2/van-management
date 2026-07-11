const Driver = require("../models/Driver");


// Add New Driver
// POST /api/drivers

const addDriver = async (req, res) => {

    try {

        const driver = await Driver.create(req.body);


        res.status(201).json({

            success:true,
            message:"Driver Added Successfully",
            data:driver

        });


    } catch(error) {


        res.status(500).json({

            success:false,
            message:error.message

        });


    }

};




// Get All Drivers
// GET /api/drivers

const getDrivers = async (req,res)=>{

    try {


        const drivers = await Driver.find();


        res.status(200).json({

            success:true,
            count:drivers.length,
            data:drivers

        });


    } catch(error) {


        res.status(500).json({

            success:false,
            message:error.message

        });


    }

};





// Get Single Driver
// GET /api/drivers/:id

const getDriverById = async(req,res)=>{


    try {


        const driver = await Driver.findById(
            req.params.id
        );


        if(!driver){

            return res.status(404).json({

                success:false,
                message:"Driver Not Found"

            });

        }


        res.status(200).json({

            success:true,
            data:driver

        });



    } catch(error){


        res.status(500).json({

            success:false,
            message:error.message

        });


    }

};





// Delete Driver
// DELETE /api/drivers/:id

const deleteDriver = async(req,res)=>{


    try {


        const driver = await Driver.findById(
            req.params.id
        );


        if(!driver){

            return res.status(404).json({

                success:false,
                message:"Driver Not Found"

            });

        }



        await driver.deleteOne();



        res.status(200).json({

            success:true,
            message:"Driver Deleted Successfully"

        });



    } catch(error){


        res.status(500).json({

            success:false,
            message:error.message

        });


    }


};





module.exports = {

    addDriver,
    getDrivers,
    getDriverById,
    deleteDriver

};