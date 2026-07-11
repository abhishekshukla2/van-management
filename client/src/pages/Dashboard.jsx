import "./Dashboard.css";

function Dashboard() {

  const cards = [
    {
      title: "Total Students",
      count: 0,
      icon: "👨‍🎓"
    },
    {
      title: "Total Vans",
      count: 10,
      icon: "🚐"
    },
    {
      title: "Total Drivers",
      count: 10,
      icon: "👨‍✈️"
    },
    {
      title: "Total Routes",
      count: 5,
      icon: "📍"
    }
  ];


  return (

    <div className="dashboard">

      <h1>
        📊 Dashboard
      </h1>


      <div className="card-container">

        {
          cards.map((item,index)=>(

            <div className="dashboard-card" key={index}>

              <h2>
                {item.icon}
              </h2>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.count}
              </p>

            </div>

          ))
        }

      </div>


      <div className="chart-box">

        <h2>
          🚐 Van Wise Student Report
        </h2>


        <table>

          <thead>
            <tr>
              <th>Van Name</th>
              <th>Driver</th>
              <th>Students</th>
            </tr>
          </thead>


          <tbody>

            <tr>
              <td>Van 1</td>
              <td>Driver 1</td>
              <td>0</td>
            </tr>


            <tr>
              <td>Van 2</td>
              <td>Driver 2</td>
              <td>0</td>
            </tr>

          </tbody>

        </table>


      </div>


    </div>

  );

}


export default Dashboard;