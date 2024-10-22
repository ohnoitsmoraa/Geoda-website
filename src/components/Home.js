import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import HeroSection from "./HeroSection";
import About from "./About";

function App() {
	return (
		<main>
			<section className="relative min-h-screen overflow-hidden">
				<nav>
					<Navbar />
				</nav>
				<carousel>
					<Carousel />
				</carousel>
				<hero>
					<HeroSection />
				</hero>
			</section>
			<section className=" min-h-screen">
				<About />
			</section>
		</main>
	);
}

export default App;
