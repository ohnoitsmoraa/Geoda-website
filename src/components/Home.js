import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
	const imageUrls = [
		{
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokLE_DNiQMo7Bzb0Cv2lZGqKPOkTjxAbWAA&s", // Drip irrigation  system
		},
		{
			image:
				"https://h2oglobalnews.com/wp-content/uploads/2023/09/Sprinkler-irrigation-system-smart-water-conservation-technique-farmsio.jpg", // Water supply system
		},
		{
			image:
				"https://irrigazette.com/sites/default/files/styles/640x640/public/field/image/pivot_0.jpg.jpeg?itok=6rZ6dNuC", // Centre pivot system
		},
		{
			image:
				"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.yby-irrigation.com%2Fspray-irrigation%2Foverhead-sprinkler-irrigation.html&psig=AOvVaw2s-NTbAWtWjF_hQMx4cp-Z&ust=1728581585555000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjm5q_qgYkDFQAAAAAdAAAAABAE", // Overhead irrigation system
		},
		{
			image:
				"https://www.twl-irrigation.com/wp-content/uploads/2023/06/Sprinklers.jpg", // Lawn irrigation system
		},
		{
			image:
				"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheconstructor.org%2Fpractical-guide%2Fwater-pumps-construction-sites%2F340485%2F&psig=AOvVaw0MuJl7DNDmjL9aX3RlhKq5&ust=1728581674352000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPD8-YrrgYkDFQAAAAAdAAAAABAE", // Pumping system and civil works
		},
		{
			image:
				"https://www.pericoli.com/wp-content/uploads/2022/01/pericoli-35-648.jpg", // Greenhouse heating
		},
		{
			image:
				"https://5.imimg.com/data5/SELLER/Default/2023/10/355641190/IX/CE/VJ/21106891/agricultural-misting-system-500x500.jpg", // Greenhouse misting
		},
		{
			image:
				"https://greenhouseinkenya.co.ke/wp-content/uploads/2023/05/Untitled-design-43-1024x576.jpg", // Reservoir lines
		},
		{
			image:
				"https://grekkon.com/wp-content/uploads/2022/12/GH-tunnel-type-out.jpeg", // Greenhouse tunnel
		},
		{
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHuxkl_kRvE3rpWujioVjJ4l4XLgAaF-6Mg&s", // Turn key irrigatio
		},
		{
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9l1NdLpHnW5OMY5CyadLHtIiWqJFCSSMXQ&s", // Water silos
		},
		{
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_I2QwqABtBJXBIpvquYixTPihqBD-Wn7EbQ&s", // Hydroponics system
		},
		{
			image:
				"https://i0.wp.com/geopard.tech/wp-content/uploads/2021/12/What-is-fertigation-2-min.jpg?resize=810%2C439&ssl=1", // Fertigation system
		},
		{
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsJn20ggCKmwuwkBpO81PZNduUxDGGUMHMg&s", // Rain-guns
		},
		{
			image:
				"https://nonprofitquarterly.org/wp-content/uploads/2023/11/agrovoltaics.jpeg", // Solar PV solution
		},
		{
			image: "https://ksnmdrip.com/uploads/blogs/Blogs_6639cf074490e_83.png", // Solar irrigation
		},
		{
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ut6NtO1yRlmbydPTxd2FLtGnXza1ikIpTA&s", // Solar water heating
		},
	];

	const settings = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	return (
		<div
			// className="carousel-container"
			// style={{
			// 	width: "80%",
			// 	margin: "0 auto",
			// 	paddingTop: "50px",
			// 	height: "500px",
			// }} // Set a fixed height for the carousel
			className=" overflow-hidden"
		>
			<Slider {...settings}>
				{imageUrls.map((url, index) => (
					<div
						key={index}
						className="w-full overflow-hidden flex items-center justify-center"
					>
						<img
							src={url.image}
							className=" w-full h-full object-cover overflow-hidden"
							alt={`Slide ${index + 1}`}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Home;
