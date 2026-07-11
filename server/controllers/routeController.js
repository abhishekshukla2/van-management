const Route = require("../models/Route");


// Add New Route
// POST /api/routes

const addRoute = async(req,res)=>{


    try{


        const route = await Route.create(req.body);


        res.status(201).json({

            success:true,
            message:"Route Added Successfully",
            data:route

        });



    }catch(error){


        res.status(500).json({

            success:false,
            message:error.message

        });


    }


};






// Get All Routes
// GET /api/routes

const getRoutes = async(req,res)=>{


    try{


        const routes = await Route.find();


        res.status(200).json({

            success:true,
            count:routes.length,
            data:routes

        });



    }catch(error){


        res.status(500).json({

            success:false,
            message:error.message

        });


    }


};






// Get Single Route
// GET /api/routes/:id

const getRouteById = async(req,res)=>{


    try{


        const route = await Route.findById(
            req.params.id
        );


        if(!route){


            return res.status(404).json({

                success:false,
                message:"Route Not Found"

            });


        }



        res.status(200).json({

            success:true,
            data:route

        });



    }catch(error){


        res.status(500).json({

            success:false,
            message:error.message

        });


    }


};







// Update Route
// PUT /api/routes/:id

const updateRoute = async(req,res)=>{


    try{


        const route = await Route.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new:true
            }

        );



        if(!route){


            return res.status(404).json({

                success:false,
                message:"Route Not Found"

            });


        }




        res.status(200).json({

            success:true,
            message:"Route Updated Successfully",
            data:route

        });



    }catch(error){


        res.status(500).json({

            success:false,
            message:error.message

        });


    }


};








// Delete Route
// DELETE /api/routes/:id

const deleteRoute = async(req,res)=>{


    try{


        const route = await Route.findById(
            req.params.id
        );


        if(!route){


            return res.status(404).json({

                success:false,
                message:"Route Not Found"

            });


        }



        await route.deleteOne();



        res.status(200).json({

            success:true,
            message:"Route Deleted Successfully"

        });



    }catch(error){


        res.status(500).json({

            success:false,
            message:error.message

        });


    }


};







module.exports = {

    addRoute,
    getRoutes,
    getRouteById,
    updateRoute,
    deleteRoute

};