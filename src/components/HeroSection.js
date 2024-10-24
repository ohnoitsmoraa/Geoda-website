import React from "react";

const HeroSection = () => {
	return (
		<div>
			{/* green overlay */}
			<div className="absolute inset-0 bg-green-500 bg-opacity-25 mix-blend-multiply" />
			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-4">
				<div className="text-center mb-8">
					<h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg text-green-500 ">
						WELCOME TO GEODA GREENS
					</h1>
					<p className="text-xl md:text-2xl text-shadow">
						Your Dilligent & Honest Partner in Farming Practices
					</p>
				</div>
				<button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg animate-bounce">
					Discover More
				</button>
			</div>
		</div>
	);
};

export default HeroSection;
