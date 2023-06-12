import GMap from "./GMap"
import { useNavigate } from 'react-router-dom'
import MapItem from "./MapItem"

function UserProfile() {

	const navigate = useNavigate()

	function handleCreateMap() {
		//open explore modal
	}

	return (
		<>
			<div className="py-8 px-4 mx-3 lg:py-16 lg:px-6 flex justify-center flex-row">

				<div className="lg:w-1/4 p-5 min-w-56" id="user-profile">
					<div className="text-center text-gray-500 dark:text-gray-400">
						<img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
						<h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
							<a href="#">Bonnie Green</a>
						</h3>
						<h4 className="mb-1 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Embrace the world as your playground and let your travels paint the canvas of your soul!</h4>
						<p>
							"Hi there! I'm Bonnie, a travel enthusiast and storyteller. Join me as I navigate the globe, seeking immersive cultural experiences, hidden gems, and breathtaking landscapes. Let's ignite the spirit of adventure and inspire each other to live a life filled with exploration and discovery!"
						</p>
						<div>
							<p>My travel vibe...</p>
							<p>type1 </p>
							<p>type2 </p>
							<p>type3 </p>
							<p>type4... </p>
						</div>
					</div>
				</div>

				<div>
					<div className="flex justify-end p-10">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-0 w-56"
							onClick={handleCreateMap()}
						>
							+	CREATE NEW MAP
						</button>
					</div >

					<div className="grid grid-cols-2 h-auto gap-4 p-5">
						<MapItem />
						<MapItem />
						<MapItem />
						<MapItem />


					</div>

				</div>

			</div>


		</>
	)
}

export default UserProfile