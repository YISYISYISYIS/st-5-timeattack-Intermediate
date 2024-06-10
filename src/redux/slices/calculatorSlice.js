// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.
import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: 0,
  reducers: {
    add: (state, action) => {
      state += action.payload;
    },
    subtract: (state, action) => {
      state -= action.payload;
    },
  },
});

export const { add, subtract } = calculatorSlice.actions;
export default calculatorSlice.reducer;
