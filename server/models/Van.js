const mongoose = require("mongoose");


const vanSchema = new mongoose.Schema(

{

    vanNumber:{

        type:String,

        required:true,

        unique:true

    },


    driverName:{

        type:String,

        required:true

    },


    driverMobile:{

        type:String

    },


    routeName:{

        type:String

    },


    capacity:{

        type:Number,

        default:20

    },


    totalStudents:{

        type:Number,

        default:0

    },


    shift:{

        type:String,

        enum:[
            "Morning",
            "Afternoon"
        ],

        default:"Morning"

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

    "Van",

    vanSchema

);