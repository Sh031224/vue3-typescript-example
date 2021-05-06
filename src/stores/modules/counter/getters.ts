import { RootState } from "stores";
import { GetterTree } from "vuex";
import { State } from "./state";

export interface Getters {
  ["counter/count"](state: State): number;
}

export const getters: GetterTree<State, RootState> & Getters = {
  ["counter/count"]: (state: State) => state.count
};
