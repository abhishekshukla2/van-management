const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");


// Database
const connectDB = require("./config/db");


// Routes
const studentRoutes = require("./routes/studentRoutes");
const driverRoutes = require("./routes/driverRoutes");
const vanRoutes = require("./routes/vanRoutes");
const routeRoutes = require("./routes/routeRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");



// dotenv config
dotenv.config();


// Connect Database
connectDB();



const app = express();



// Middleware

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));






// Home API

app.get("/", (req, res) => {


    res.status(200).json({

        success:true,

        message:"🚐 School Van Management Backend Running Successfully"

    });


});







// Test API

app.get("/api/test",(req,res)=>{


    res.status(200).json({

        success:true,

        message:"API Working Properly"

    });


});








// Student API

app.use(

    "/api/students",

    studentRoutes

);






// Driver API

app.use(

    "/api/drivers",

    driverRoutes

);






// Van API

app.use(

    "/api/vans",

    vanRoutes

);






// Route API

app.use(

    "/api/routes",

    routeRoutes

);







// Dashboard API

app.use(

    "/api/dashboard",

    dashboardRoutes

);








// Server Port

const PORT = process.env.PORT || 5000;






// Start Server

app.listen(PORT,()=>{


    console.log(
        `✅ Server Running On Port ${PORT}`
    );


});