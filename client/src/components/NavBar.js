import { Link } from "react-router-dom"
import Login from "./user/Login"

function NavBar() {

	const clearSelection = () => {
		//setSelectedTripOption from explore and set to ''
		console.log('home page clicked')
	}

	return (


		<div className="navbar bg-base-100 bg-gradient-to-r from-[#92969C] to-[#91959A] sticky top-0 z-10">
			<div className="flex-1">
				<Link to='/' className="btn btn-ghost normal-case text-xl">
					<img src="1bvibe.png" className="h-12" alt="Logo" />
					<span className="self-end text-4xl font-semibold whitespace-nowrap font-pacifico text-white drop-shadow-lg">Vibe</span>
					<span className="self-end text-3xl font-semibold whitespace-nowrap text-white drop-shadow-lg">Map</span>
				</Link>

			</div>
			<div className="flex-none">
				<div className="flex flex-row">
					<Login />
					<a className="p-6">Sign Up</a>
				</div>
				{/* only when loged in */}
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</label>
					<div className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-40 z-[1]" >
						<Link to='/profile'>
							<a className="hover:text-blue-700">Profile </a>
						</Link>
						<Link to='/'>
							<a className="hover:text-blue-700">Logout</a>
						</Link>
					</div>
				</div>
			</div>
		</div >
	)
}

export default NavBar