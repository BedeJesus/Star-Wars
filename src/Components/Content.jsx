import { Routes,Route } from "react-router";
import Home from "./Home/Home";




export default function Content(){
    return(
        <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
        </div>
    )
}














