import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomePageCarousel = () => {
    const imageUrls = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokLE_DNiQMo7Bzb0Cv2lZGqKPOkTjxAbWAA&s",  // Drip irrigation  system
        "https://h2oglobalnews.com/wp-content/uploads/2023/09/Sprinkler-irrigation-system-smart-water-conservation-technique-farmsio.jpg",  // Water supply system
        "https://irrigazette.com/sites/default/files/styles/640x640/public/field/image/pivot_0.jpg.jpeg?itok=6rZ6dNuC",  // Centre pivot system
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.yby-irrigation.com%2Fspray-irrigation%2Foverhead-sprinkler-irrigation.html&psig=AOvVaw2s-NTbAWtWjF_hQMx4cp-Z&ust=1728581585555000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjm5q_qgYkDFQAAAAAdAAAAABAE",  // Overhead irrigation system
        "https://www.twl-irrigation.com/wp-content/uploads/2023/06/Sprinklers.jpg",  // Lawn irrigation system
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheconstructor.org%2Fpractical-guide%2Fwater-pumps-construction-sites%2F340485%2F&psig=AOvVaw0MuJl7DNDmjL9aX3RlhKq5&ust=1728581674352000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPD8-YrrgYkDFQAAAAAdAAAAABAE",  // Pumping system and civil works
        "https://www.pericoli.com/wp-content/uploads/2022/01/pericoli-35-648.jpg",  // Greenhouse heating
        "https://5.imimg.com/data5/SELLER/Default/2023/10/355641190/IX/CE/VJ/21106891/agricultural-misting-system-500x500.jpg",  // Greenhouse misting
        "https://greenhouseinkenya.co.ke/wp-content/uploads/2023/05/Untitled-design-43-1024x576.jpg",  // Reservoir lines
        "https://grekkon.com/wp-content/uploads/2022/12/GH-tunnel-type-out.jpeg",  // Greenhouse tunnel
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHuxkl_kRvE3rpWujioVjJ4l4XLgAaF-6Mg&s",  // Turn key irrigatio
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9l1NdLpHnW5OMY5CyadLHtIiWqJFCSSMXQ&s",  // Water silos
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_I2QwqABtBJXBIpvquYixTPihqBD-Wn7EbQ&s",  // Hydroponics system
        "https://i0.wp.com/geopard.tech/wp-content/uploads/2021/12/What-is-fertigation-2-min.jpg?resize=810%2C439&ssl=1",  // Fertigation system
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsJn20ggCKmwuwkBpO81PZNduUxDGGUMHMg&s",  // Rain-guns
        "https://nonprofitquarterly.org/wp-content/uploads/2023/11/agrovoltaics.jpeg",  // Solar PV solution
        "https://ksnmdrip.com/uploads/blogs/Blogs_6639cf074490e_83.png",  // Solar irrigation
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ut6NtO1yRlmbydPTxd2FLtGnXza1ikIpTA&s",  // Solar water heating
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzkC0SHKPOBOeuZ2ru_uTmITrhZeZCuOL4NA&s",  // Solar lighting
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="carousel-container" style={{ width: '80%', margin: '0 auto', paddingTop: '50px' }}>
            <Slider {...settings}>
                {imageUrls.map((url, index) => (
                    <div key={index}>
                        <img
                            src={url}
                            alt={`Slide ${index + 1}`}
                            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const App = () => {
  return (
    <div>
      <HomePageCarousel />
    </div>
  );
}

export default App;
