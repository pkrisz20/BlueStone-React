import { useState, useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../features/cart";
import ImageGallery from 'react-image-gallery';
import "../styles/components/Details.scss";

const ProductDetails = ({ product }) => {
    const trans = useTranslation();
    const cartContent = useSelector(state => state.cart.value);
    const [productQuantity, setProductQuantity] = useState(1);
    const [tab, setTab] = useState(1);
    const dispatch = useDispatch();
    const [galleryImages, setGalleryImages] = useState([]);

    const toggleTab = (index) => {
        setTab(index);
    }

    const decrementQuantity = () => {
        if (productQuantity <= 1) return;
        else { setProductQuantity(prev => prev - 1); }
    }

    const handleAddCart = () => {
        if (product.isOnDiscount) {
            dispatch(addCart({ ...product, price: product.discount, quantity: productQuantity }));
        }
        else if (!product.isOnDiscount) {
            dispatch(addCart({ ...product, quantity: productQuantity }));
        }
    }

    const checkIsInCart = useCallback((productId) => {
        const isInCart = cartContent.some(item => item.id === productId);
        return isInCart;
    }, [cartContent]);

    useEffect(() => {
        let ignore = false;
        if (!ignore) {
            product.images.forEach(element => {
                setGalleryImages(prev => [...prev, { origianl: element, thumbnail: element, srcSet: element }]);
            });
        }
        return () => { ignore = true };
    }, []);

    return (
        <>
            <div className='details'>
                <ImageGallery items={galleryImages} showPlayButton={false} showFullscreenButton={false} disableKeyDown={true} showNav={false} />

                <div className="details-description">
                    <h2 className="product-name">{ product.title }</h2>
                    <p className='product-short'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, doloribus esse voluptate veniam quia repudiandae reprehenderit sit eos soluta provident aliquam odit ratione. Nemo debitis deserunt itaque repellendus, corporis tempore id sequi odio? Laudantium vitae adipisci, dolor voluptate dolorum voluptatum sunt nihil nisi! Eveniet iusto harum quo at earum possimus.</p>

                    { !product.isOnDiscount ? (<h4 className='product-price'>{ product.price }</h4>)
                    :
                        <>
                            <h4 className='product-price'>{ product.discount }</h4>
                            <h4 className="product-price--discount">{ product.price }</h4>
                        </>
                    }

                    { product.isAvailable ? (
                        <>
                            { !checkIsInCart(product.id) ? (
                                <>
                                    <div className="product-quantity">
                                        <button onClick={ decrementQuantity } className='product-quantity-btn'>-</button>
                                        <input className='product-quantity-input' min={1} type="number" placeholder={productQuantity} />
                                        <button onClick={ () => setProductQuantity(prev => prev + 1) } className='product-quantity-btn'>+</button>
                                    </div>
                                    <button onClick={ handleAddCart } className='product-add-cart'>{trans("cart.add")}</button>
                                </>
                                )
                            : <div className="product-bottom-cart-added"><i className="fas fa-check-circle"></i> {trans("cart.added")}</div> }
                        </>
                    ) : <p className="product-out"><i className="fas fa-times-circle"></i> {trans("cart.not-available")}</p> }
                </div>
            </div>
            <div className="product-specifications">

                <div className="tab-headers">
                    <div className={`tab-headers-link ${tab === 1 ? 'active' : ''}`} onClick={ () => toggleTab(1) }>{ trans("product.specifications") }</div>
                    <div className={`tab-headers-link ${tab === 2 ? 'active' : ''}`} onClick={ () => toggleTab(2) }>{ trans("product.variants") }</div>
                    <div className={`tab-headers-link ${tab === 3 ? 'active' : ''}`} onClick={ () => toggleTab(3) }>{ trans("product.parameters") }</div>
                </div>

                { tab === 1 && (<div className="tab-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure maiores facilis aliquam natus quis magnam vitae nesciunt doloremque!</div>)}
                { tab === 2 && (<div className="tab-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure maiores facilis aliquam natus quis magnam vitae nesciunt doloremque! Ipsa doloribus, aspernatur at dolorem adipisci cupiditate corrupti. Quidem rerum pariatur natus?</div>)}
                { tab === 3 && (<div className="tab-content">Ipsa doloribus, aspernatur at dolorem adipisci cupiditate corrupti. Quidem rerum pariatur natus?</div>)}
            </div>
        </>
    );
}

export default ProductDetails;