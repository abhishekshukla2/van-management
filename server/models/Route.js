const mongoose = require("mongoose");


const routeSchema = new mongoose.Schema(

{

    routeName:{

        type:String,

        required:true

    },


    startPoint:{

        type:String,

        required:true

    },


    endPoint:{

        type:String,

        required:true

    },


    stops:[

        {

            type:String

        }

    ],


    vanNumber:{

        type:String

    },


    driverName:{

        type:String

    },


    pickupTime:{

        type:String

    },


    dropTime:{

        type:String

    },


    shift:{

        type:String,

        enum:[
            "Morning",
            "Afternoon"
        ],

        default:"Morning"

    }


},

{

    timestamps:true

}

);



module.exports = mongoose.model(

    "Route",

    routeSchema

);