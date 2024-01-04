import { Link, Outlet } from "react-router-dom";

export function Menu(){

return(
    <>
    <nav>
        <ul>
        <li>
            <Link to="register">Register</Link>

        </li>
        <li>
        <Link to="login">Login</Link>
        </li>
        </ul>
    </nav>
    <Outlet/>
    </>
)


}