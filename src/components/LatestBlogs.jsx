import BlockTitle from "./BlockTitle";
import Slider from "react-slick";
import "../styles/components/LatestBlogs.scss";
import { ImArrowLeft2 } from 'react-icons/im';
import { ImArrowRight2 } from 'react-icons/im';

const LatestBlogs = ({ blogArticles }) => {

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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <section className="blogs">
            <div className="wrapper">
                <BlockTitle main="Latest Blogs" sub="Our Latest Blogs/News" />

                <Slider className="slider" { ...settings }>
                    {
                        blogArticles?.map((blog, index) => {
                            return (
                                <article className="slider-item" key={ index }>
                                    <a className="slider-item-image">
                                        <picture>
                                            <img loading="lazy" alt={ blog.title } src={ require(`../assets/${blog.image}`) } />
                                        </picture>
                                    </a>
                                    <div className="slider-item-content">
                                        <div className="slider-item-content-top">
                                            <div className="date">
                                                <time className="date-day">{ blog.day }</time>
                                                <time className="date-month">{ blog.month }</time>
                                            </div>
                                            <h3 className="title">{ blog.title }</h3>
                                        </div>
                                        <p className="slider-item-content-text">{ blog.desc }</p>
                                        <a className="slider-item-content-link">Know More <ImArrowRight2 /></a>
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

export default LatestBlogs;
