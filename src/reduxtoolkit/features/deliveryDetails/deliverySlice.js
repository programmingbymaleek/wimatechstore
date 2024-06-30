import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../utilis/firebase.utils";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const initialState = {
  name: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  address: "",
  loading: false,
  error: null,
};

export const fetchDeliveryDetails = createAsyncThunk(
  "delivery/fetchDeliveryDetails",
  async (userId, { rejectWithValue }) => {
    try {
      const docRef = doc(db, "deliveryDetails", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return rejectWithValue("No delivery details found");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const saveDeliveryDetails = createAsyncThunk(
  "delivery/saveDeliveryDetails",
  async (deliveryDetails, { rejectWithValue }) => {
    try {
      const userId = deliveryDetails.userId; // Assuming userId is included in deliveryDetails
      const docRef = doc(db, "deliveryDetails", userId);
      if (await docRef.get().exists()) {
        await updateDoc(docRef, deliveryDetails); // Update existing document
      } else {
        await setDoc(docRef, deliveryDetails); // Create new document if not exists
      }
      return deliveryDetails;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const deliveryDetailsSlice = createSlice({
  name: "deliveryDetails",
  initialState,
  reducers: {
    setDeliveryDetails(state, action) {
      return { ...state, ...action.payload, error: null };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeliveryDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDeliveryDetails.fulfilled, (state, action) => {
        state.loading = false;
        return { ...state, ...action.payload };
      })
      .addCase(fetchDeliveryDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(saveDeliveryDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveDeliveryDetails.fulfilled, (state, action) => {
        state.loading = false;
        return { ...state, ...action.payload };
      })
      .addCase(saveDeliveryDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { setDeliveryDetails } = deliveryDetailsSlice.actions;
export const deliveryDetailsReducer = deliveryDetailsSlice.reducer;
