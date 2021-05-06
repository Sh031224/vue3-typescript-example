import { ActionContext, ActionTree } from "vuex";
import { RootState } from "stores";
import { CounterActions } from "./action-types";
import { State } from "./state";
import { Mutations } from "./mutations";
import { CounterMutations } from "./mutation-types";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export interface Actions {
  [CounterActions.INCREMENT]({ commit }: AugmentedActionContext): void;
  [CounterActions.DECREMENT]({ commit }: AugmentedActionContext): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  [CounterActions.INCREMENT]({ commit }) {
    commit(CounterMutations.INCREMENT, undefined);
  },
  [CounterActions.DECREMENT]({ commit }) {
    commit(CounterMutations.DECREMENT, undefined);
  }
};
