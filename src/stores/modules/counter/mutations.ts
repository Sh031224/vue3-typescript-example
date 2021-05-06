import { MutationTree } from "vuex";
import { CounterMutations } from "./mutation-types";
import { State } from "./state";

export type Mutations<S = State> = {
  [CounterMutations.INCREMENT](state: S): void;
  [CounterMutations.DECREMENT](state: S): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [CounterMutations.INCREMENT]: (state) => state.count++,
  [CounterMutations.DECREMENT]: (state) => state.count--
};
