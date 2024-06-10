import { useSelector, useDispatch } from "react-redux";
export default function TodoForm() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodos = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };
    dispatch(addTodo(newTodos));
  };
  return (
    <form onSubmit={onSubmit}>
      <label>제목: </label>
      <input type="text" value={title} /> <label>내용: </label>
      <input type="text" />
      <button>추가</button>
    </form>
  );
}
