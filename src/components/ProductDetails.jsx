import LightGallery from 'lightgallery/react';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgZoom from 'lightgallery/plugins/zoom';
import "../styles/components/Details.scss";
import { useState } from 'react';
import { useTranslation } from 'react-multi-lang';

const ProductDetails = ({ product }) => {
    const trans = useTranslation();
    const [productQuantity, setProductQuantity] = useState(1);
    const [tab, setTab] = useState(1);

    const toggleTab = (index) => {
        setTab(index);
    }

    const descremntQuantity = () => {
        if (productQuantity <= 1) return;
        else { setProductQuantity(prev => prev - 1); }
    }

    return (
        <>
            <div className='details'>
                <LightGallery
                    speed={500}
                    plugins={[lgZoom]}>
                    <a className="gallery-image" href={product.image}>
                        <img alt="Image 1 description" src={product.image} />
                    </a>
                </LightGallery>

                <div className="details-description">
                    <h2 className="product-name">{ product.title }</h2>
                    <p className='product-short'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, doloribus esse voluptate veniam quia repudiandae reprehenderit sit eos soluta provident aliquam odit ratione. Nemo debitis deserunt itaque repellendus, corporis tempore id sequi odio? Laudantium vitae adipisci, dolor voluptate dolorum voluptatum sunt nihil nisi! Eveniet iusto harum quo at earum possimus.</p>

                    <h4 className='product-price'>{ product.price }</h4>
                    { product.isOnDiscount && <h4 className="product-price--discount">{ product.discount }</h4> }

                    { product.isAvailable ? (
                        <>
                            <div className="product-quantity">
                                <button onClick={ descremntQuantity } className='btn product-quantity-btn'>-</button>
                                <input className='product-quantity-input' type="number" placeholder={productQuantity} />
                                <button onClick={ () => setProductQuantity(prev => prev + 1) } className='btn product-quantity-btn'>+</button>
                            </div>

                            <button className='btn product-add'>{trans("cart.add")}</button>
                        </>
                    ) : <p className="product-out"><i className="fas fa-times-circle"></i> {trans("cart.not-available")}</p> }
                </div>
            </div>
            <div className="product-specifications">

                <div className="tab-headers">
                    <div className={`tab-headers-link ${tab === 1 ? 'active' : ''}`} onClick={ () => toggleTab(1) }>Specifications</div>
                    <div className={`tab-headers-link ${tab === 2 ? 'active' : ''}`} onClick={ () => toggleTab(2) }>Variants</div>
                    <div className={`tab-headers-link ${tab === 3 ? 'active' : ''}`} onClick={ () => toggleTab(3) }>Parameters</div>
                </div>

                { tab === 1 && (<div className="tab-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure maiores facilis aliquam natus quis magnam vitae nesciunt doloremque!</div>)}
                { tab === 2 && (<div className="tab-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure maiores facilis aliquam natus quis magnam vitae nesciunt doloremque! Ipsa doloribus, aspernatur at dolorem adipisci cupiditate corrupti. Quidem rerum pariatur natus?</div>)}
                { tab === 3 && (<div className="tab-content">Ipsa doloribus, aspernatur at dolorem adipisci cupiditate corrupti. Quidem rerum pariatur natus?</div>)}
            </div>
        </>
    );
}

export default ProductDetails;