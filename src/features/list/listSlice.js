import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  middleList: [],
  leftList: [],
  rightList: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToMiddleList: (state, action) => {
      state.middleList.unshift({ ...action.payload, list_number: 0 });
    },
    addToLeftList: (state, action) => {
      state.leftList.unshift({ ...action.payload, list_number: 1 });
    },
    addToRightList: (state, action) => {
      state.rightList.unshift({ ...action.payload, list_number: 2 });
    },
    removeFromMiddleList: (state, action) => {
      const itemId = action.payload.id;
      state.middleList = state.middleList.filter((item) => item.id !== itemId);
    },
    removeFromLeftList: (state, action) => {
      const itemId = action.payload.id;
      state.leftList = state.leftList.filter((item) => {
        return item.id !== itemId}
      );
    },
    removeFromRightList: (state, action) => {
      const itemId = action.payload.id;
      state.rightList = state.rightList.filter((item) => item.id !== itemId);
    },
  },
});

export const {
  addToLeftList,
  addToRightList,
  addToMiddleList,
  removeFromLeftList,
  removeFromMiddleList,
  removeFromRightList,
} = listSlice.actions;

export default listSlice.reducer;
