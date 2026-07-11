const Van = require("../models/Van");


// Add New Van
// POST /api/vans

const addVan = async (req, res) => {

    try {


        const van = await Van.create(req.body);


        res.status(201).json({

            success:true,
            message:"Van Added Successfully",
            data:van

        });


    } catch(error) {


        res.status(500).json({

            success:false,
            message:error.message

        });


    }

};





// Get All Vans
// GET /api/vans

const getVans = async(req,res)=>{


    try{


        const vans = await Van.find();


        res.status(200).json({

            success:true,
            count:vans.length,
            data:vans

        });



    }catch(error){


        res.status(500).json({

            success:false,
            message:error.message

        });


    }


};





// Get Single Van
// GET /api/vans/:id

const getVanById = async(req,res)=>{


    try{


        const van = await Van.findById(
            req.params.id
        );


        if(!van){

            return res.status(404).json({

                success:false,
                message:"Van Not Found"

            });

        }


        res.status(200).json({

            success:true,
            data:van

        });



    }catch(error){


        res.status(500).json({

            success:false,
            message:error.message

        });


    }


};






// Update Van
// PUT /api/vans/:id

const updateVan = async(req,res)=>{


    try{


        const van = await Van.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new:true
            }

        );


        if(!van){

            return res.status(404).json({

                success:false,
                message:"Van Not Found"

            });

        }


        res.status(200).json({

            success:true,
            message:"Van Updated Successfully",
            data:van

        });



    }catch(error){


        res.status(500).json({

            success:false,
            message:error.message

        });


    }


};






// Delete Van
// DELETE /api/vans/:id

const deleteVan = async(req,res)=>{


    try{


        const van = await Van.findById(
            req.params.id
        );


        if(!van){

            return res.status(404).json({

                success:false,
                message:"Van Not Found"

            });

        }



        await van.deleteOne();



        res.status(200).json({

            success:true,
            message:"Van Deleted Successfully"

        });



    }catch(error){


        res.status(500).json({

            success:false,
            message:error.message

        });


    }


};





module.exports = {

    addVan,
    getVans,
    getVanById,
    updateVan,
    deleteVan

};