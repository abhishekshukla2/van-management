const express = require("express");

const router = express.Router();



const {

    addDriver,
    getDrivers,
    getDriverById,
    deleteDriver

} = require("../controllers/driverController");




// Add Driver

router.post(

    "/",

    addDriver

);




// Get All Drivers

router.get(

    "/",

    getDrivers

);




// Get Single Driver

router.get(

    "/:id",

    getDriverById

);




// Delete Driver

router.delete(

    "/:id",

    deleteDriver

);



module.exports = router;