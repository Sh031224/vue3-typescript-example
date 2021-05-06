import { RootState } from "stores";
import { CommitOptions, DispatchOptions, Module, Store as VuexStore } from "vuex";
import { Actions, actions } from "./actions";
import { Getters, getters } from "./getters";
import { Mutations, mutations } from "./mutations";
import { State, state } from "./state";

export type CounterStore<S = State> = Omit<VuexStore<S>, "getters" | "commit" | "dispatch"> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export const store: Module<State, RootState> = {
  state,
  mutations,
  getters,
  actions

  // TODO: With namespaced option turned on, having problem how to use dispatch with action types...
  // But without it, a bigger store might have clashes in namings
  // namespaced: true,
};

export * from "./action-types";
export * from "./mutation-types";
export * from "./getter-types";
export * from "./state";
