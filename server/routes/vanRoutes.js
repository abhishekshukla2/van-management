const express = require("express");

const router = express.Router();



const {

    addVan,
    getVans,
    getVanById,
    updateVan,
    deleteVan

} = require("../controllers/vanController");





// Add Van

router.post(

    "/",

    addVan

);





// Get All Vans

router.get(

    "/",

    getVans

);





// Get Single Van

router.get(

    "/:id",

    getVanById

);





// Update Van

router.put(

    "/:id",

    updateVan

);





// Delete Van

router.delete(

    "/:id",

    deleteVan

);





module.exports = router;