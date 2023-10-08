import './Navbar.css'

export default function Navbar(){
    return(
        <header>
            <p className="navbar--logo">DualStock</p>
            <nav>                
                <ul className="nav_links">         
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Account</a></li>
                </ul>
            </nav>
            <p className="navbar--logout">Log out</p>
        </header>
    )    
}