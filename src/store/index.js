import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    options: [],
    selectedOption: null
  },
  mutations: {
    SET_OPTIONS(state, options) {
      state.options = options;
    },
    SET_SELECTED_OPTION(state, option) {
      state.selectedOption = option;
    }
  },
  actions: {
    fetchOptions({ commit }) {
      // Replace 'options.json' with the path to your JSON file
      fetch('options.json')
        .then((response) => response.json())
        .then((options) => {
          commit('SET_OPTIONS', options);
        })
        .catch((error) => {
          console.error('Error fetching options:', error);
        });
    },
    selectOption({ commit, state }, index) {
      const selectedOption = state.options[index];
      commit('SET_SELECTED_OPTION', selectedOption);
    }
  }
});

export default store;