import Button from "./Button";
import "../styles/components/Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, clearCart, deleteItem } from "../features/cart";
import { useMemo } from "react";
import { useTranslation } from 'react-multi-lang';

const Cart = ({ isOpen, closeCart, cartRef }) => {
    const cart = useSelector(state => state.cart.value);
    const dispatch = useDispatch();
    const trans = useTranslation();

    const totalPrice = useMemo(() => {
        return cart.reduce((total, item) => item.quantity * item.price + total, 0);
    }, [cart]);

    return (
        <div ref={cartRef} className={`cart ${isOpen ? 'cart-open' : ''}`}>
            <ul className="cart-list">
                <div onClick={() => closeCart()} className="cart-list-close"><i className="fas fa-times"></i></div>
                {
                    cart?.length > 0 ? (
                        cart?.map(item => {
                            return (
                                <li key={item.id} className="cart-list_item">
                                    <h3 className="product-title">{item.title}</h3>

                                    <div className="product-top">
                                        <div className="product-image">
                                            <img src={item.images[0]} alt="product image" />
                                        </div>
                                        <div className="product-quantity">{item.quantity} x {item.price} €</div>
                                    </div>

                                    <div className="product-bottom">
                                        <Button classProp="product-btn left" text="-" onClick={() => dispatch(decrement(item.id))} />
                                        <input onChange={(e) => dispatch(incrementByAmount([item.id, e.target.value]))} className="product-input" value={item.quantity} type="number" />
                                        <Button classProp="product-btn right" text="+" onClick={() => dispatch(increment(item.id))}/>
                                    </div>
                                    <Button text={trans("cart.remove")} classProp="product-remove" onClick={() => dispatch(deleteItem(item.id))} />
                                </li>
                            );
                        })
                    ) : <div className="cart-list-empty">{trans("cart.empty")}</div>
                }
            </ul>

            { cart?.length > 0 &&
                <div className="cart-bottom">
                    <div className="cart-total">Total: {totalPrice} €</div>
                    <Button classProp="cart-clear" text={trans("cart.clear")} onClick={() => dispatch(clearCart())} />
                </div>
            }
        </div>
    );
}

export default Cart;