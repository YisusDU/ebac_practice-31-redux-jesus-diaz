import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, toggleCart } from '../../actions';
import { CartContainer, CartItem, RemoveButton, CloseButton } from './styles';

const Cart = () => {
    const isOpen = useSelector(state => state.cart.isOpen);
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <CartContainer isOpen={isOpen}>
            <CloseButton onClick={() => dispatch(toggleCart())}>X</CloseButton>
            <h2>Your Cart</h2>
            {items.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <ul>
                    {items.map(item => (
                        <CartItem key={item.id}>
                            <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                            {item.name}  ${item.price} x {item.quantity}
                            <RemoveButton onClick={() => handleRemove(item.id)}>Remove</RemoveButton>
                        </CartItem>
                    ))}
                </ul>
            )}
        </CartContainer>
    );
};

export default Cart;