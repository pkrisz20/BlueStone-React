// import { useState } from "react";
import BlockTitle from "../components/BlockTitle";
import Button from "./Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/Products.scss";
import Slider from "react-slick";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../features/cart";
import { useTranslation } from 'react-multi-lang';

const Products = ({ products }) => {
    const trans = useTranslation();
    const cart = useSelector(state => state.cart.value);
    const dispatch = useDispatch();

    function SampleNextArrow({ classProp, onClick }) {
        return (
            <button
            className={`slick-arrow slick-next ${classProp}`}
            onClick={onClick}
            ><i className="fas fa-chevron-right"></i></button>
        );
    }

    function SamplePrevArrow({ classProp, onClick }) {
        return (
            <button
            className={`slick-arrow slick-prev ${classProp}`}
            onClick={onClick}
            ><i className="fas fa-chevron-left"></i></button>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow classProp="product-next" />,
        prevArrow: <SamplePrevArrow classProp="product-prev" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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

    const handleAddToCart = (product) => {
        if (product.isOnDiscount) {
            dispatch(addCart({ ...product, price: product.discount, quantity: 1 }));
        }
        else if (!product.isOnDiscount) {
            dispatch(addCart({ ...product, quantity: 1 }));
        }
    }
    
    const checkIsInCart = useCallback((productId) => {
        const isInCart = cart.some(item => item.id === productId);
        return isInCart;
    }, [cart]);

    return (
        <>
            <BlockTitle title={trans("cart.products")} />

            <Slider {...settings}>
                {
                    products?.map(item => {
                        return (
                            <div className="product" key={item.id}>
                                { item.discount && <div className="product-discount">{trans("cart.discount")}</div> }
                                <div className="product-image">
                                    <img src={item.image} alt="product image" />
                                </div>
                                <div className="product-bottom">
                                    <h3 className="product-bottom-title">{item.title}</h3>
                                    <h4 className={`product-bottom-price ${item.isOnDiscount ? 'old-price' : ''}`}>{item.price} €</h4>
                                    { (item?.isOnDiscount && item?.discount !== null) && (<h4 className="product-bottom-price">{item.discount} €</h4>) }
                                    {
                                        item.isAvailable ? <small className="product-bottom-available"><i className="fas fa-check-circle"></i> {trans("cart.available")}</small> :
                                        <small className="product-bottom-unavailable"><i className="fas fa-times-circle"></i> {trans("cart.not-available")}</small>
                                    }
                                    <small>{checkIsInCart(item.id)}</small>
                                    
                                    { !checkIsInCart(item.id) ? <Button disabled={!item.isAvailable} onClick={() => handleAddToCart(item)} text={trans("cart.add")} icon={<i className="fas fa-shopping-cart"></i>} classProp={`product-bottom-cart ${!item.isAvailable ? 'not-allowed' : ''}`} />
                                    : <div className="product-bottom-cart-added"><i className="fas fa-check-circle"></i> {trans("cart.added")}</div> }
                                </div>
                            </div>
                        );
                    })
                }
            </Slider>
        </>
    )
}

export default Products;