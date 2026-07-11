const express = require("express");

const router = express.Router();


const {

    addStudent,
    getStudents,
    getStudentById,
    deleteStudent

} = require("../controllers/studentController");



// Add Student

router.post(
    "/",
    addStudent
);



// Get All Students

router.get(
    "/",
    getStudents
);



// Get Single Student

router.get(
    "/:id",
    getStudentById
);



// Delete Student

router.delete(
    "/:id",
    deleteStudent
);



module.exports = router;