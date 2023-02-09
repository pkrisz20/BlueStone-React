import Slider from "react-slick";
import "../styles/components/Opinions.scss";
import { Fragment, useState } from 'react';
import { ImArrowLeft2 } from 'react-icons/im';
import { ImArrowRight2 } from 'react-icons/im';

const Opinions = ({ opinions, brands }) => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button
                className={className}
                onClick={onClick}
            ><ImArrowRight2 /></button>
        );
    }

    function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button
                className={className}
                onClick={onClick}
            ><ImArrowLeft2 /></button>
        );
    }

    const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        focusOnSelect: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        slickCurrentSlide: 2
    };

    return (
        <section className="opinions">
            <div className="wrapper">
                <div className="opinions-carousel">
                    <Slider className="slider-items" asNavFor={nav2} ref={(slider1) => setNav1(slider1)} arrows={ false }>
                        {
                            opinions?.map((opinion, index) => {
                                return (
                                    <Fragment key={ index }>
                                        <picture className="quote-picture">
                                            <img alt="Quote Sign" loading="lazy" src={ require('../assets/quote-sign.png') } />
                                        </picture>
                                        <h4 className="quote-big">{ opinion.quoteBig }</h4>
                                        <p className="quote-small">{ opinion.quoteSmall }</p>
                                        <h5 className="quote-author">{ opinion.personName } - <em>{ opinion.position }</em></h5>
                                    </Fragment>
                                );
                            })
                        }
                    </Slider>

                    <Slider className="slider-nav" { ...settings } asNavFor={nav1} ref={(slider2) => setNav2(slider2)}>
                        {
                            opinions?.map((opinion, index) => {
                                return (
                                    <div className="slider-nav-item" key={ index }>
                                        <img loading="lazy" alt={ opinion.personName } src={ require(`../assets/${opinion.personImage}`) } />
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
                <div className="opinions-brands">
                    {
                        brands?.map((brand, index) => {
                            return (
                                <a className="opinions-brands-logo" href="/" key={ index }>
                                    <img loading="lazy" alt={ `Brand logo - ${index}` } src={ require('../assets/' + brand) } />
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
