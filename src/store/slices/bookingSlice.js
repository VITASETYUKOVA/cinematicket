import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookings: [],
  },
  reducers: {
    addBooking(state, action) {
      state.bookings.push(action.payload);
    },
    removeBooking(state, action) {
      state.bookings = state.bookings.filter(
        (b) => b.id !== action.payload.id
      );
    },
  },
});

export const { addBooking, removeBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
