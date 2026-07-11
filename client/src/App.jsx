import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Drivers from "./pages/Drivers";
import Vans from "./pages/Vans";
import RoutesPage from "./pages/Routes";
import Reports from "./pages/Reports";
import Stops from "./pages/Stops";


function App(){

return(

<BrowserRouter>

<Navbar/>


<div style={{display:"flex"}}>

<Sidebar/>


<div style={{flex:1,padding:"20px"}}>


<Routes>


<Route path="/" element={<Dashboard/>}/>


<Route path="/students" element={<Students/>}/>


<Route path="/drivers" element={<Drivers/>}/>


<Route path="/vans" element={<Vans/>}/>


<Route path="/routes" element={<RoutesPage/>}/>


<Route path="/reports" element={<Reports/>}/>


<Route path="/stops" element={<Stops/>}/>


</Routes>


</div>


</div>


</BrowserRouter>

);

}


export default App;