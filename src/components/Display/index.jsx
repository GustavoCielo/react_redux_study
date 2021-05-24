import { useSelector } from "react-redux";

export default function Display() {
  const numbers = useSelector((state) => state.number);
  return (
    <div>
      <div>{numbers}</div>
    </div>
  );
}
