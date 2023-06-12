function Login() {
	return (
		<>
			<button className=" text-white hover:text-slate-800 drop-shadow-lg text-lg" onClick={() => window.my_modal_3.showModal()}>Login</button>
			<dialog id="my_modal_3" className="modal">
				<form method="dialog" className="modal-box">
					<button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					<div class="px-6 py-6 lg:px-8">
						<h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
						<form class="space-y-6" action="#">
							<div>
								<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
								<input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
							</div>
							<div>
								<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
								<input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
							</div>
							<div class="flex justify-between">
								<div class="flex items-start"></div>
							</div>
							<button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
							<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
								Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
							</div>
						</form>
					</div>
				</form>
			</dialog>

		</>
	)
}

export default Login