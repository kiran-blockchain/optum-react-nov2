import { NavBarItems } from "../config/constants"

export const NavLinks = () => {
    //Dynamic html creation
    // dropdowns
    // tables
    // any data collection  to be rendered.
    const buildNavItems = () => {
       return NavBarItems.map((item, index) => {
            return (
                <li class="nav-item" key={item.displayName}>
                    <a class="nav-link" href={item.link}>{item.displayName}</a>
                </li>
            )
        })
    }
    return (
        <ul class="navbar-nav">
           {buildNavItems()}
        </ul>
    )
}