import tourism_logo from '/assets/logo/MyTripsTravels.jpg'
import './css/Navbar.css'

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navabr-left">
                <img src={tourism_logo} alt="irctc logo" className="logo"/>
            </div>

            <div>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>Activity</li>
                    <li>Hotels</li>
                    <li>Flights</li>
                    <li>Service</li>
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            
            <div className="navbar-right">
                <button className="call-btn">CALL NOW</button>
            </div>
        </nav>
    )
}

export default Navbar