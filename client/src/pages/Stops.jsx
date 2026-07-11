import { useState } from "react";
import "./Stops.css";


function Stops(){

const [stop,setStop] = useState({

    stopName:"",
    location:"",
    time:"",
    routeName:""

});


const [stops,setStops] = useState([]);



const handleChange=(e)=>{

    setStop({

        ...stop,
        [e.target.name]:e.target.value

    });

};



const addStop=(e)=>{

    e.preventDefault();


    setStops([

        ...stops,
        stop

    ]);


    setStop({

        stopName:"",
        location:"",
        time:"",
        routeName:""

    });

};



return(

<div className="stops">


<h1>
📍 Pickup Stop Management
</h1>



<form onSubmit={addStop}>


<input

name="stopName"
placeholder="Stop Name"
value={stop.stopName}
onChange={handleChange}

/>


<input

name="location"
placeholder="Location"
value={stop.location}
onChange={handleChange}

/>


<input

name="time"
placeholder="Pickup Time"
value={stop.time}
onChange={handleChange}

/>


<input

name="routeName"
placeholder="Route Name"
value={stop.routeName}
onChange={handleChange}

/>


<button>
Add Stop
</button>


</form>



<h2>
Stop List
</h2>


<table>


<thead>

<tr>

<th>Stop Name</th>
<th>Location</th>
<th>Time</th>
<th>Route</th>

</tr>

</thead>


<tbody>


{

stops.map((s,index)=>(

<tr key={index}>

<td>{s.stopName}</td>

<td>{s.location}</td>

<td>{s.time}</td>

<td>{s.routeName}</td>

</tr>

))

}


</tbody>


</table>



</div>


);


}


export default Stops;