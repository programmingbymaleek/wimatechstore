import { createSlice } from "@reduxjs/toolkit";

const addCartItem = (cartItemsArray, productTodAdd) => {
  const findItemIndex = cartItemsArray.findIndex(
    (cartItem) => cartItem.id === productTodAdd.id
  );
  if (findItemIndex !== -1) {
    const updatedCartItem = cartItemsArray.map((cartItem, index) => {
      // If the current index matches the existingItemIndex, increment the quantity
      if (index === findItemIndex) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      // Otherwise, return the cartItem unchanged
      return cartItem;
    });
    return updatedCartItem;
  }
  const newItem = { ...productTodAdd, quantity: 1 };
  return [...cartItemsArray, newItem];
  //find if cartItemArray contains product to add..
  //if found, increment quantity.
  //return new array of modified cart items/new cart items
};

const incrementItem = (cartItems, product_increment_id) => {
  return cartItems.map((item) =>
    item.id === product_increment_id
      ? { ...item, quantity: (item.quantity += 1) }
      : item
  );
};

const decrementItem = (cartItems, product_to_decrement) => {
  return cartItems.map((item) =>
    (item.id === product_to_decrement.id) & (product_to_decrement.quantity > 1)
      ? { ...item, quantity: (item.quantity -= 1) }
      : item
  );
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
    setcartToEmpty: (state) => {
      state.cartItems = [];
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
  setcartToEmpty,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
