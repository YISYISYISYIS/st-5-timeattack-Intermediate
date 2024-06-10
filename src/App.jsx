import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { add, subtract } from "./redux/slices/calculatorSlice";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const count = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(add());
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input /> 만큼을 <button onClick={onAdd}>더할게요</button>{" "}
        <button>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{count}</p>
      </div>
    </div>
  );
}

export default App;
