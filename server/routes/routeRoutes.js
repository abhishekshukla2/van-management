const express = require("express");

const router = express.Router();



const {

    addRoute,
    getRoutes,
    getRouteById,
    updateRoute,
    deleteRoute

} = require("../controllers/routeController");





// Add Route

router.post(

    "/",

    addRoute

);





// Get All Routes

router.get(

    "/",

    getRoutes

);





// Get Single Route

router.get(

    "/:id",

    getRouteById

);





// Update Route

router.put(

    "/:id",

    updateRoute

);





// Delete Route

router.delete(

    "/:id",

    deleteRoute

);





module.exports = router;