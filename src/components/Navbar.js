import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Leaf } from "lucide-react";

import About from "./About";

const Navbar = () => {
	return (
		<div>
			<nav className="absolute top-0 left-0 right-0 z-50 bg-black bg-opacity-50 text-white">
				<div className="container mx-auto px-4 py-3 flex justify-between items-center">
					<div className="flex items-center space-x-2">
						<img
							src="/logo.png"
							alt="GreenNature Logo"
							className="h-8 w-auto"
						/>

						<span className="text-xl font-bold"> GEODA GREENS</span>
					</div>
					<ul className="flex space-x-4">
						<li>
							<a
								href="#"
								className="hover:text-green-400 transition duration-300"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="/About"
								className="hover:text-green-400 transition duration-300"
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-green-400 transition duration-300"
							>
								Gallery
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-green-400 transition duration-300"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
			{/* <Routes>
				<Route path="/login" element={<About />} />
			</Routes> */}
		</div>
	);
};

export default Navbar;
