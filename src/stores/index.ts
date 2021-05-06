import { createStore } from "vuex";
import { store as counter, CounterStore, State as CounterState } from "./modules/counter";

export type RootState = {
  counter: CounterState;
};

// If you have more modules, you have to add them to the type like this.
// export type Store = CounterStore<Pick<RootState, "counter">> & YourStore<Pick<RootState, "your">>;
export type Store = CounterStore<Pick<RootState, "counter">>;

const store = createStore({
  modules: { counter }
});

export default store;

export const useStore = (): Store => store as Store;
