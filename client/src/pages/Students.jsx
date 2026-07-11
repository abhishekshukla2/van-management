import { useState } from "react";
import "./Students.css";


function Students(){

const [student,setStudent] = useState({

    name:"",
    studentClass:"",
    father:"",
    mobile:"",
    address:"",
    van:"",
    driver:"",
    pickup:""

});


const [students,setStudents] = useState([]);



const handleChange=(e)=>{

    setStudent({

        ...student,
        [e.target.name]:e.target.value

    });

};



const addStudent=(e)=>{

    e.preventDefault();


    setStudents([

        ...students,
        student

    ]);


    setStudent({

        name:"",
        studentClass:"",
        father:"",
        mobile:"",
        address:"",
        van:"",
        driver:"",
        pickup:""

    });

};



return(

<div className="students">


<h1>
👨‍🎓 Student Management
</h1>


<form onSubmit={addStudent}>


<input

name="name"
placeholder="Student Name"
value={student.name}
onChange={handleChange}

/>


<input

name="studentClass"
placeholder="Class"
value={student.studentClass}
onChange={handleChange}

/>


<input

name="father"
placeholder="Father Name"
value={student.father}
onChange={handleChange}

/>


<input

name="mobile"
placeholder="Mobile Number"
value={student.mobile}
onChange={handleChange}

/>


<input

name="address"
placeholder="Address"
value={student.address}
onChange={handleChange}

/>


<input

name="van"
placeholder="Van Number"
value={student.van}
onChange={handleChange}

/>


<input

name="driver"
placeholder="Driver Name"
value={student.driver}
onChange={handleChange}

/>


<input

name="pickup"
placeholder="Pickup Location"
value={student.pickup}
onChange={handleChange}

/>


<button>
Add Student
</button>


</form>



<h2>
Student List
</h2>


<table>

<thead>

<tr>

<th>Name</th>
<th>Class</th>
<th>Van</th>
<th>Driver</th>
<th>Pickup</th>

</tr>

</thead>


<tbody>


{

students.map((s,index)=>(

<tr key={index}>

<td>{s.name}</td>

<td>{s.studentClass}</td>

<td>{s.van}</td>

<td>{s.driver}</td>

<td>{s.pickup}</td>

</tr>

))

}


</tbody>


</table>


</div>


);


}


export default Students;