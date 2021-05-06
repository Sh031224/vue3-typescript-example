import { RootState } from "stores";
import { GetterTree } from "vuex";
import { CounterGetters } from "./getter-types";
import { State } from "./state";

export interface Getters {
  [CounterGetters.GET_COUNTER](state: State): number;
}

export const getters: GetterTree<State, RootState> & Getters = {
  [CounterGetters.GET_COUNTER]: (state: State) => state.count
};
