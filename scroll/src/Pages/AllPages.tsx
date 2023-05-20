
import {Routes,Route} from "react-router-dom";
import Home from './Home';

const AllPages = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    </div>
  )
}

export default AllPages