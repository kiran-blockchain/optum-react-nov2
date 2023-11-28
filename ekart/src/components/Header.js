
/**
 * Header component
 * returns 
 * a html that reperesent header
 * 
 * variations 
 * 1. export const Header =(props)=>{
 *   return(<div></div>)
 * }
 * ---------------------------------------
 * 2. const Header =(props)=>{
 *   return(<div></div>)
 * }
 * export default Header
 * ------------------------------------------
 * 3. export const Header =({})=>{
 *   return(<div></div>)
 * }
 * -------------------------------------------
 * 2. const Header =({})=>{
 *   return(<div></div>)
 * }
 * export default Header
 * https://1000logos.net/wp-content/uploads/2021/09/Optum-Font.png
 */

import { NavLinks } from "./NavLinks"

export const Header = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <NavLinks/>
                </div>
            </div>
        </nav>
    )
}

