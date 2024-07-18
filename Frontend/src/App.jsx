import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Component/home'

const App =()=>{
  return(
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Layout />}>
     <Route path='/home' element={<Home />}/>

     </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
