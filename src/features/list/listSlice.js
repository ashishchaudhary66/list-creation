import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  middleList: [],
  leftList: [],
  rightList: [],
};

export const counterSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToMiddleList: (state, action) => {
      state.middleList.push(action.payload);
    },
    addToLeftList: (state, action) => {
      state.leftList.push(action.payload);
    },
    addToRightList: (state, action) => {
      state.rightList.push(action.payload);
    },
    removeFromMiddleList: (state, action) => {
      state.middleList = state.middleList.filter(
        (list) => list.id !== action.payload
      );
    },
    removeFromLeftList: (state, action) => {
      state.leftList = state.leftList.filter(
        (list) => list.id !== action.payload
      );
    },
    removeFromRightList: (state, action) => {
      state.rightList = state.rightList.filter(
        (list) => list.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToLeftList,
  addToRightList,
  addToMiddleList,
  removeFromLeftList,
  removeFromMiddleList,
  removeFromRightList,
} = listSlice.actions;

export default listSlice.reducer;
