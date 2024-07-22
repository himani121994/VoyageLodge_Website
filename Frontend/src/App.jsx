import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Component/home';
import AdminHome from './Dashboard/DashLayout/TopNav';
import UploadRoom from "./Dashboard/DashComponent/UploadRoom";
import UploadVehicle from './Dashboard/DashComponent/UploadVehicle';
import AllRooms from './Dashboard/DashComponent/AllRooms';

const App =()=>{
  return(
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Layout />}>
     <Route path='/home' element={<Home />}/>
     </Route>

     <Route path='/admin' element={<AdminHome />}>
      <Route path='uploadroom' element={<UploadRoom />}/> 
      <Route path='uploadvehicle' element={<UploadVehicle/>}/>
      <Route path='allrooms' element={<AllRooms/>}/>
     </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
