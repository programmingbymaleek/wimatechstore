import { createSlice } from "@reduxjs/toolkit";

const addCartItem = (cartItems, productToadd) => {
  if (cartItems.length < 1) {
    return [{ ...productToadd, id: 1 }];
  } else {
    return [...cartItems, { ...productToadd, id: (cartItems.length += 1) }];
  }
};

const incrementItem = (cartItems, product_increment_id) => {
  // return cartItems.map((item) =>
  //   item.id === product_increment_id
  //     ? { ...item, quantity: (item.quantity += 1) }
  //     : item
  // );
};

const decrementItem = (cartItems, product_to_decrement) => {
  // return cartItems.map((item) =>
  //   (item.id === product_to_decrement.id) & (product_to_decrement.quantity > 1)
  //     ? { ...item, quantity: (item.quantity -= 1) }
  //     : item
  // );
};

const deletItem = (cartItems, product_To_Delete) => {
  return cartItems.filter((cartItem) => {
    return (
      cartItem.id !== product_To_Delete.id ||
      cartItem.quantity !== product_To_Delete.quantity
    );
  });
};

const initialState = {
  cartItems: [],
  toggleCart: false,
  total: 0,
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setToogleCart: (state, action) => {
      state.toggleCart = action.payload;
    },
    addItemsTocart: (state, action) => {
      state.cartItems = addCartItem(state.cartItems, action.payload);
      updateCart(state);
    },
    incrementCartItem: (state, action) => {
      state.cartItems = incrementItem(state.cartItems, action.payload);
      updateCart(state);
    },
    decrementCartItem: (state, action) => {
      state.cartItems = decrementItem(state.cartItems, action.payload);
      updateCart(state);
    },
    deletCartItem: (state, action) => {
      state.cartItems = deletItem(state.cartItems, action.payload);
      updateCart(state);
    },
  },
});

const updateCart = (state) => {
  state.total = state.cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );
  state.count = state.cartItems.reduce(
    (accumulator, current) => accumulator + current.quantity,
    0
  );
};

export const {
  setToogleCart,
  deletCartItem,
  incrementCartItem,
  decrementCartItem,
  addItemsTocart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
