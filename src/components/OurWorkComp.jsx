import BlockTitle from "../components/BlockTitle";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "../styles/components/OurWorkComp.scss";

const OurWorkComp = ({ works }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '300px'
    };

    return (
        <section className="works">
            <div className="wrapper">
                <BlockTitle main="Our Work" sub="We are specialists in multi-use, sustainable exhibition stands and event environments." />

                <Slider { ...settings } className="works-slider">
                    {
                        works?.map((item, index) => {
                            return (
                                <article className="works-slider-item" key={ index }>
                                    <div className="date">
                                        <time className="date-day">{ item.day }</time>
                                        <time className="date-month">{ item.month }.</time>
                                    </div>
                                    <picture>
                                        <img alt={ item.title } src={ require('../assets/' + item.image) } />
                                    </picture>
                                    <div className="badge">
                                        <h4 className="badge-title">{ item.title }</h4>
                                        <h5 className="badge-place"><strong>Exhibiton: </strong>{ item.place }</h5>
                                        <small className="badge-area">{ item.area } <span>Sqmtr</span></small>
                                        <a href="/" className="badge-link">Know More <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                </article>
                            );
                        })
                    }
                </Slider>
            </div>
        </section>
    );
}

export default OurWorkComp;
