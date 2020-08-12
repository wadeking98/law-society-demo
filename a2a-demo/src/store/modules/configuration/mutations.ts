import { AppConfig } from "@/models/appConfig";
import { ConfigurationState, StateType } from "@/models/storeState";
import Vue from "vue";
import { MutationTree } from "vuex";

export const mutations: MutationTree<ConfigurationState> = {
  setAppConfig(state: ConfigurationState, appConfig: AppConfig) {
    Vue.set(state.configuration, "app", appConfig);
    state.error = false;
    state.statusMessage = "success";
    state.stateType = StateType.INITIALIZED;
  },
  configurationError(state: ConfigurationState, errorMessage: string) {
    state.error = true;
    state.statusMessage = errorMessage;
    state.stateType = StateType.ERROR;
  }
};
