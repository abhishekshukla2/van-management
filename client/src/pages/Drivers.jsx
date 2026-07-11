import { useState } from "react";
import "./Drivers.css";


function Drivers(){

const [driver,setDriver] = useState({

    name:"",
    mobile:"",
    license:"",
    vanNumber:""

});


const [drivers,setDrivers] = useState([]);



const handleChange=(e)=>{

    setDriver({

        ...driver,
        [e.target.name]:e.target.value

    });

};



const addDriver=(e)=>{

    e.preventDefault();


    setDrivers([

        ...drivers,
        driver

    ]);


    setDriver({

        name:"",
        mobile:"",
        license:"",
        vanNumber:""

    });

};



return(

<div className="drivers">


<h1>
👨‍✈️ Driver Management
</h1>



<form onSubmit={addDriver}>


<input

name="name"
placeholder="Driver Name"
value={driver.name}
onChange={handleChange}

/>


<input

name="mobile"
placeholder="Mobile Number"
value={driver.mobile}
onChange={handleChange}

/>


<input

name="license"
placeholder="Driving License Number"
value={driver.license}
onChange={handleChange}

/>


<input

name="vanNumber"
placeholder="Van Number"
value={driver.vanNumber}
onChange={handleChange}

/>


<button>
Add Driver
</button>


</form>




<h2>
Driver List
</h2>



<table>


<thead>

<tr>

<th>Name</th>
<th>Mobile</th>
<th>License</th>
<th>Van Number</th>

</tr>

</thead>



<tbody>


{

drivers.map((d,index)=>(

<tr key={index}>

<td>{d.name}</td>

<td>{d.mobile}</td>

<td>{d.license}</td>

<td>{d.vanNumber}</td>

</tr>


))

}


</tbody>


</table>



</div>


);


}


export default Drivers;