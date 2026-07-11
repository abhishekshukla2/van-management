import { useState } from "react";
import "./Vans.css";


function Vans(){

const [van,setVan] = useState({

    vanNumber:"",
    driver:"",
    mobile:"",
    route:"",
    capacity:""

});


const [vans,setVans] = useState([]);



const handleChange=(e)=>{

    setVan({

        ...van,
        [e.target.name]:e.target.value

    });

};



const addVan=(e)=>{

    e.preventDefault();


    setVans([

        ...vans,
        van

    ]);


    setVan({

        vanNumber:"",
        driver:"",
        mobile:"",
        route:"",
        capacity:""

    });

};



return(

<div className="vans">


<h1>
🚐 Van Management
</h1>



<form onSubmit={addVan}>


<input
name="vanNumber"
placeholder="Van Number"
value={van.vanNumber}
onChange={handleChange}
/>


<input
name="driver"
placeholder="Driver Name"
value={van.driver}
onChange={handleChange}
/>


<input
name="mobile"
placeholder="Driver Mobile"
value={van.mobile}
onChange={handleChange}
/>


<input
name="route"
placeholder="Van Route"
value={van.route}
onChange={handleChange}
/>


<input
name="capacity"
placeholder="Student Capacity"
value={van.capacity}
onChange={handleChange}
/>


<button>
Add Van
</button>


</form>



<h2>
Van List
</h2>



<table>

<thead>

<tr>

<th>Van Number</th>
<th>Driver</th>
<th>Mobile</th>
<th>Route</th>
<th>Capacity</th>

</tr>

</thead>


<tbody>


{

vans.map((v,index)=>(

<tr key={index}>

<td>{v.vanNumber}</td>
<td>{v.driver}</td>
<td>{v.mobile}</td>
<td>{v.route}</td>
<td>{v.capacity}</td>

</tr>

))

}


</tbody>


</table>



</div>


);

}


export default Vans;