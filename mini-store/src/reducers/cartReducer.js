import { TOGGLE_CART, REMOVE_FROM_CART, ADD_TO_CART } from '../actions';

const initialState = {
    isOpen: false,
    items: [],
};

// Función para actualizar los items en el carrito
const updateItems = (items, item, quantityChange) => {
    const index = items.findIndex(i => i.id === item.id);
    if (index >= 0) {
        const updatedItems = [...items];
        updatedItems[index] = { ...updatedItems[index], quantity: updatedItems[index].quantity + quantityChange };
        return updatedItems[index].quantity === 0 ? updatedItems.filter(i => i.id !== item.id) : updatedItems;
    }
    return [...items, { ...item, quantity: 1 }];
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: updateItems(state.items, action.payload, 1)
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: updateItems(state.items, { id: action.payload }, -1)
            };
        case TOGGLE_CART:
            return {
                ...state,
                isOpen: !state.isOpen,
            };
        default:
            return state;
    }
};

export default cartReducer;