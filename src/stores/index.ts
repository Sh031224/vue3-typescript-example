import { createStore } from "vuex";
import { store as counter, CounterStore, State as CounterState } from "./modules/counter";

export type RootState = {
  counter: CounterState;
};

export type Store = CounterStore<Pick<RootState, "counter">>;

const store = createStore({
  modules: { counter }
});

export default store;

export const useStore = (): Store => store as Store;
