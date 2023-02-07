import Slider from "react-slick";
import "../styles/components/Opinions.scss";

const Opinions = ({ opinions, brands }) => {

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button
                className={className}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button
                className={className}
                onClick={onClick}
            />
        );
    }

    const settingsItems = {
        asNavFor: "#opinions-thumbnails",
        arrows: false,
        dots: false,
        speed: 500,
        slidesToShow: 1
    };

    const settingsNav = {
        slidesToShow: 3,
        asNavFor: "#slider-opinions",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <section className="opinions">
            <div className="wrapper">
                <div className="opinions-carousel">
                    <Slider className="slider-items" id="slider-opinions" settings={ settingsItems }>
                        .
                    </Slider>

                    <Slider id="opinions-thumbnails" className="slider-nav" settings={ settingsNav }>
                        {
                            opinions?.map((item, index) => {
                                return (
                                    <div className="slider-nav-item" key={ index }>
                                        <picture>
                                            <img loading="lazy" alt={ item.personName } src={ item.personImage } />
                                        </picture>
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
                <div className="opinions-brands">
                    {
                        brands?.map((item, index) => {
                            return (
                                <a className="opinions-brands-logo" href="/" key={ index }>
                                    <picture>
                                        <img loading="lazy" alt={ `Brand logo - ${index}` } src={ require('../assets/' + item) } />
                                    </picture>
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Opinions;
