import Button from "./Button";
import "../styles/components/Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter";

const Cart = ({ isOpen, closeCart, cartRef }) => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div ref={cartRef} className={`cart ${isOpen ? 'cart-open' : ''}`}>
            <ul className="cart-list">
                <div onClick={() => closeCart()} className="cart-list-close">X</div>

                <li className="cart-list_item">
                    <h3 className="product-title">Product Title</h3>

                    <div className="product-top">
                        <div className="product-image">
                            <img src={require("../assets/product-example.jpeg")} alt="product image" />
                        </div>
                        <div className="product-quantity">3 x 150</div>
                    </div>

                    <div className="product-bottom">
                        <Button classProp="product-btn left" text="-" onClick={() => dispatch(decrement())} />
                        <input className="product-input" type="number" />
                        <Button classProp="product-btn right" text="+" onClick={() => dispatch(increment())}/>
                    </div>
                </li>
            </ul>

            <div className="cart-total">Total: {count}</div>
            <Button classProp="cart-clear" text="Clear cart" />
        </div>
    );
}

export default Cart;