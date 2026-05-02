import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
     removeUserFromFeed: (state, action) => {
      //action.payload will be the userId of the user that we
      //want to remove from the feed which we will be getting from the UserCard component
      //when we dispatch the removeUserFromFeed action after sending a request
      const newFeed = state.filter((user) => user._id !== action.payload);
      return newFeed;
    },
  },
});

export const { addFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;