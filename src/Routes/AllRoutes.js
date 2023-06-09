import {Route, Routes} from "react-router-dom";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Contact from "../Pages/Contact/Contact";
import Register from "../Pages/Register/Register";
import Crud from "../Pages/OperationCrud/Crud";
import Edit from "../Pages/OperationCrud/Edit";


const AllRoutes = () =>{
    return(
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/products"} element={<Products/>}/>
            <Route path={"/contact"} element={<Contact/>}/>
            <Route path={"/account/login"} element={<Login/>}/>
            <Route path={"/account/register"} element={<Register/>}/>
            <Route path={"/crud-operation/"}>
                <Route path={""} element={<Crud/>}/>
                <Route path={"edit/:id"} element={<Edit/>}/>
            </Route>
        </Routes>
    )
}
export default AllRoutes