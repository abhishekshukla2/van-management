import { useState } from "react";
import "./Routes.css";


function Routes(){

const [route,setRoute] = useState({

    routeName:"",
    startPoint:"",
    endPoint:"",
    stops:"",
    vanNumber:""

});


const [routes,setRoutes] = useState([]);



const handleChange=(e)=>{

    setRoute({

        ...route,
        [e.target.name]:e.target.value

    });

};



const addRoute=(e)=>{

    e.preventDefault();


    setRoutes([

        ...routes,
        route

    ]);


    setRoute({

        routeName:"",
        startPoint:"",
        endPoint:"",
        stops:"",
        vanNumber:""

    });

};



return(

<div className="routes">


<h1>
📍 Van Route Management
</h1>



<form onSubmit={addRoute}>


<input

name="routeName"
placeholder="Route Name"
value={route.routeName}
onChange={handleChange}

/>


<input

name="startPoint"
placeholder="Starting Point"
value={route.startPoint}
onChange={handleChange}

/>


<input

name="endPoint"
placeholder="Ending Point"
value={route.endPoint}
onChange={handleChange}

/>


<input

name="stops"
placeholder="Pickup Stops"
value={route.stops}
onChange={handleChange}

/>


<input

name="vanNumber"
placeholder="Van Number"
value={route.vanNumber}
onChange={handleChange}

/>


<button>
Add Route
</button>


</form>



<h2>
Route List
</h2>



<table>


<thead>

<tr>

<th>Route Name</th>
<th>Start</th>
<th>End</th>
<th>Stops</th>
<th>Van</th>

</tr>

</thead>



<tbody>


{

routes.map((r,index)=>(

<tr key={index}>

<td>{r.routeName}</td>

<td>{r.startPoint}</td>

<td>{r.endPoint}</td>

<td>{r.stops}</td>

<td>{r.vanNumber}</td>

</tr>

))

}


</tbody>


</table>



</div>


);


}


export default Routes;