

import { BrowserRouter,Routes,Route } from "react-router-dom";

import { Home } from "./Pages/Home";

import { Menu } from "./Menu";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Welcome } from "./pages/Welcome";
import { Update } from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Menu/>}>

    <Route index element={<Home/>} />
   
    
    <Route path="register" element={<Register/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="welcome" element={<Welcome/>}/>
    <Route path="update" element={<Update/>}/>


  </Route>


  
 </Routes>
 </BrowserRouter>
  );
}

export default App;


