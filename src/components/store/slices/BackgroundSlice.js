import { createSlice } from "@reduxjs/toolkit";

const BackgrounSlice = createSlice({
  name: "backgroundImage",
  initialState: {
    url: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x1148/f9c7c966b6ae9a2cd6baa0deee02b07c/photo-1691958671724-966fd5a84cc2.jpg"
  },
  reducers: {
    changeBackground: (state, action) => {
      console.log(action.payload);
      // state.url = action.payload;
    },
  },
});

export const { changeBackground } = BackgrounSlice.actions;
export default BackgrounSlice.reducer;
