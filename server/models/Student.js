const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema(

{

    name:{

        type:String,

        required:true

    },


    studentClass:{

        type:String,

        required:true

    },


    father:{

        type:String

    },


    mobile:{

        type:String

    },


    address:{

        type:String

    },


    vanNumber:{

        type:String,

        required:true

    },


    driverName:{

        type:String

    },


    pickupLocation:{

        type:String,

        required:true

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

    "Student",

    studentSchema

);