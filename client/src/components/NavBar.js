import { Link } from "react-router-dom"
import Home from "./Home"

function NavBar() {

    const clearSelection = () => {
        //setSelectedTripOption from explore and set to ''
        console.log('home page clicked')
    }

    return (
        <nav>
            <>
                <div className="nav-logo" onClick={clearSelection}>
                    <Link to='/'>LOGO</Link>

                </div>
                <div className="authentication">
                    <div>
                        <h3>Login</h3>
                        <h3>Sign Up</h3>
                    </div>
                </div>
            </>
        </nav>
    )
}

export default NavBar