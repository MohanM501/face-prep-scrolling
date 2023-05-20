
import {Routes,Route} from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Landing from "./Landing";
import PrivateRoute from "../Components/PrivateRoute";



const AllPages = () => {
  return (
    <div>
            <Routes>
                <Route path="/" element={<Landing/>}></Route>
                <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        
    </div>
  )
}

export default AllPages