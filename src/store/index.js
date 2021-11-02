import { createStore } from "vuex";

export default createStore({
  state: {
    myPlants: [
    ],
  },
  mutations: {
    addPlants(state, plant) {
      state.myPlants.push(plant);
    },
  },
});
