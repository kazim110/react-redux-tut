import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem';
import { clearCart } from '../features/cart/cartSlice';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
    const {cartItems,total,amount} = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    if(amount<1){
        return(
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4 className='empye-cart'>is currently empty</h4>
                </header>
            </section>
        );
    };
  return (
    <section className='cart'>
        <header>your bag</header>
        <div>
            {cartItems.map((item) => {
                return <CartItem key={item.id} {...item}/>
            })}
        </div>
        <footer>
            <hr/>
            <div className='cart-total'>
                <h4>
                    total <span>${total}</span>
                </h4>
            </div>
            <button className='btn clear-btn'
            onClick={()=>{
                dispatch(openModal());
            }}>clear cart</button>
        </footer>
    </section>
  );
};

export default CartContainer