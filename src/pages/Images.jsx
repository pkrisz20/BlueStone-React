import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import BlockTitle from "../components/BlockTitle";
import 'font-awesome/css/font-awesome.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/Carousel.scss";
import Slider from "react-slick";

const Images = () => {
    const [searchParams, setSearchParams] = useSearchParams({ count: 3 });
    const [images, setImages] = useState([
        {
            title: "Mount Everest",
            image: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Andok",
            image: "https://images.pexels.com/photos/1726966/pexels-photo-1726966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Karpatok",
            image: "https://images.pexels.com/photos/1526719/pexels-photo-1526719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Balkan Mountains",
            image: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Scotland",
            image: "https://images.pexels.com/photos/1726966/pexels-photo-1726966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Grand Canyon",
            image: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ]);

    function SampleNextArrow({ className, onClick }) {
        return (
            <button
            className={className}
            onClick={onClick}
            ><i className="fas fa-chevron-right"></i></button>
        );
    }

    function SamplePrevArrow({ className, onClick }) {
        return (
            <button
            className={className}
            onClick={onClick}
            ><i className="fas fa-chevron-left"></i></button>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className={"valami"} />,
        prevArrow: <SamplePrevArrow className={"valami 2"} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <BlockTitle title={`Carousel with Images ${searchParams.get("count")}`} />

            <Slider {...settings}>
                {
                    images?.map((item, index) => {
                        return (
                            <div className="slide" key={index}>
                                <h5 className="slide-title">{item.title}</h5>
                                <img src={item.image} alt="placeimage" />
                            </div>
                        );
                    })
                }
            </Slider>
        </>
    );
}

export default Images;