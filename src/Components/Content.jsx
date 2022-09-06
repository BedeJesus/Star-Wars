import { Routes,Route } from "react-router";
import Characters from "./Characters/Characters";
import Home from "./Home/Home";
import Planets from "./Planets/Planets";




export default function Content(){
    return(
        <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/characters' element={<Characters/>}/>
            <Route path='/planets' element={<Planets/>}/>

        </Routes>
        </div>
    )
}














