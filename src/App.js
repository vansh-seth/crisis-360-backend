//App.js
import './App.css';
 import Profile from './pages/Profile';
import Helpline from './pages/Helpline';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from './pages/Navbar';
import Login1 from './pages/Login1';
import Signup from './pages/Signup';
import Alert from './pages/Alert';  
import About from './pages/About'; 

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<About />}   />
      <Route exact path="/helpline" element={<Helpline />}   />

      <Route exact path= "/alert" element={<Alert />}  />
      <Route exact path= "/profile" element={<Profile />}  />
      <Route exact path= "/login" element={<Login1 />}  />
      <Route exact path= "/signup" element={<Signup/>}  />
     </Routes>
    
     </BrowserRouter> 
  );
}

export default App;
