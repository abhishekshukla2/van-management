const mongoose = require("mongoose");


const driverSchema = new mongoose.Schema(

{

    name:{

        type:String,

        required:true

    },


    mobile:{

        type:String,

        required:true

    },


    licenseNumber:{

        type:String,

        required:true

    },


    address:{

        type:String

    },


    vanNumber:{

        type:String,

    },


    experience:{

        type:String

    },


    status:{

        type:String,

        enum:[
            "Active",
            "Inactive"
        ],

        default:"Active"

    }


},

{

    timestamps:true

}

);



module.exports = mongoose.model(

    "Driver",

    driverSchema

);