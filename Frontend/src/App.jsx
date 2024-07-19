import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Component/home';
import AdminHome from './Dashboard/DashLayout/TopNav';
import UploadRoom from "./Dashboard/DashComponent/UploadRoom";

const App =()=>{
  return(
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Layout />}>
     <Route path='/home' element={<Home />}/>
     </Route>

     <Route path='/admin' element={<AdminHome />}>
      <Route path='uploadroom' element={<UploadRoom />}/> 
     </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
