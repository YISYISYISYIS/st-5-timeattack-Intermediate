// TODO: todoSlice 를 작성하세요.
import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "리액트1",
      content: "내용입니다1",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트2",
      content: "내용입니다2",
      isDone: true,
    },
  ],
  reducers: {
    workingTodos: (state, action) => {
      state.filter((state) => !state.isDone);
    },
    doneTodos: (state, action) => {
      state.filter((state) => state.isDone);
    },
    addTodo: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { workingTodos, doneTodos } = todosSlice.actions;
export default todosSlice.reducer;
