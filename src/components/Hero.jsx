import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "../styles/components/Hero.scss"

const Hero = ({ images }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings} className="hero">
            {
                images?.map((item, index) => {
                    return (
                        <div className="hero-item" key={index}>
                            <div className="hero-item-content">
                                <h2 className="hero-item-content-title">{item.title}</h2>
                                <p className="hero-item-content-desc">{item.desc}</p>
                                <button className="hero-item-content-btn">{item.buttons} <i className="fas fa-arrow-right"></i></button>
                            </div>
                            <div className="hero-item-picture">
                                <picture>
                                    <source srcSet={require('../assets/' + item.image)} />
                                    <img src={require('../assets/' + item.image)} alt={item.image} />
                                </picture>
                            </div>
                        </div>
                    );
                })
            }
        </Slider>
    );
}

export default Hero
