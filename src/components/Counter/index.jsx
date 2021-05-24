import { useDispatch, useSelector } from "react-redux";
import { addNumber, removeNumber } from "../../store/modules/counter/actions";

export default function Counter() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(addNumber(1))}>Add 1</button>
      <button onClick={() => dispatch(removeNumber(1))}>Sub 1</button>
    </>
  );
}
