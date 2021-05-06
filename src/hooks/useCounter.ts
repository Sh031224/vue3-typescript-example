import { useStore } from "../stores";
import { CounterActions } from "../stores/modules/counter";

const useCounter = () => {
  const store = useStore();

  const increment = () => store.dispatch(CounterActions.INCREMENT, undefined);
  const decrement = () => store.dispatch(CounterActions.DECREMENT, undefined);

  return {
    increment,
    decrement
  };
};

export default useCounter;
