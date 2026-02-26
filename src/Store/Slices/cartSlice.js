import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, name, price, discountPrice, image } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    id,
                    name,
                    price,
                    discountPrice,
                    image,
                    quantity: 1,
                });
            }
            state.totalQuantity += 1;
            state.totalPrice += discountPrice || price;
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const item = state.items.find((item) => item.id === id);
            
            if (item) {
                state.totalQuantity -= item.quantity;
                state.totalPrice -= (item.discountPrice || item.price) * item.quantity;
                state.items = state.items.filter((item) => item.id !== id);
            }
        },
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find((item) => item.id === id);
            
            if (item) {
                item.quantity += 1;
                state.totalQuantity += 1;
                state.totalPrice += item.discountPrice || item.price;
            }
        },
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find((item) => item.id === id);
            
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalPrice -= item.discountPrice || item.price;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;