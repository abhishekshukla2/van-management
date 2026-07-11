import "./Reports.css";


function Reports(){

const vanReport = [

    {
        van:"Van 1",
        driver:"Ramesh",
        students:15,
        route:"Basti Road"
    },

    {
        van:"Van 2",
        driver:"Suresh",
        students:20,
        route:"City Road"
    },

    {
        van:"Van 3",
        driver:"Amit",
        students:12,
        route:"Station Road"
    }

];


return(

<div className="reports">


<h1>
📊 Van Reports Dashboard
</h1>


<div className="report-cards">


<div className="report-card">

<h2>
🚐 Total Vans
</h2>

<p>
10
</p>

</div>


<div className="report-card">

<h2>
👨‍🎓 Total Students
</h2>

<p>
47
</p>

</div>


<div className="report-card">

<h2>
👨‍✈️ Total Drivers
</h2>

<p>
10
</p>

</div>


</div>



<h2>
🚐 Van Wise Student Report
</h2>


<table>


<thead>

<tr>

<th>Van Number</th>
<th>Driver Name</th>
<th>Total Students</th>
<th>Route</th>

</tr>

</thead>


<tbody>


{

vanReport.map((item,index)=>(

<tr key={index}>

<td>{item.van}</td>

<td>{item.driver}</td>

<td>{item.students}</td>

<td>{item.route}</td>

</tr>


))

}


</tbody>


</table>



</div>


);


}


export default Reports;