import React from "react";

function About() {
	return (
		<div className="bg-green-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
					Geoda Greens: Your Diligent & Honest Partner in Farming Practices
				</h1>
				<h2 className="text-2xl font-semibold text-green-600 mb-8 text-center">
					Cultivating a Sustainable Farming Future
				</h2>
				<div className="bg-white shadow-lg rounded-lg overflow-hidden">
					<div className="p-8">
						<h3 className="text-xl font-bold text-green-700 mb-4">
							GEODA GREEN SUPPLIERS LTD.
						</h3>
						<div className="text-gray-700 mb-8 leading-relaxed">
							<p>
								Geoda Green Suppliers Ltd. is a company dedicated to providing
								farmers with high-quality, durable greenhouses and farming
								materials that suit different climatic conditions both in Kenya
								and many African countries. Through our services, farmers who
								were previously dependent on common farming methods have
								discovered that they can farm on a relatively small piece of
								land controlled under a greenhouse and achieve higher returns.
								This has helped both large and small-scale farmers overcome
								frequent farming challenges, thereby increasing farm produce.
							</p>
						</div>
						<div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-3xl shadow-inner">
							<div className="bg-white bg-opacity-60 p-6 rounded-2xl">
								<h3 className="text-2xl font-bold text-green-800 mb-4">
									Our Mission
								</h3>
								<p className="text-gray-700 mb-4">
									Our mission is to teach new technology and provide solutions
									to our dear clients. We focus on:
								</p>
								<ul className="list-disc list-inside text-gray-700 space-y-2">
									<li>
										Increasing farm yields and profitability through strategic
										solutions.
									</li>
									<li>
										Empowering farmers with new technology and solutions to
										farming challenges experienced.
									</li>
									<li>
										Improving living standards of farmers through high yields
										they achieve.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
