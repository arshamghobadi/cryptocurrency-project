
import './App.css';
import Landing from './component/Landing';
import NavbarCrip from './component/NavbarCrip';
import { Routes, Route, Navigate } from 'react-router-dom';
import CardDetails from './component/CardDetails';
import Login from './component/Login';
import SignUp from './component/SignUp';



function App() {
  return (
    <>
      
      <NavbarCrip/>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/coins/:name' element={<CardDetails/>}/>
        <Route path='/coins' element={<Landing/>}/>
        <Route path='/' element={<Navigate to="/coins"/>} />
      </Routes>
      
      </>
  );
}

export default App;
