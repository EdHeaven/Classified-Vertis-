import { getReg, getLogin, getLogout } from '@/services/auth.service';

const mutations = {
  setRegError(state, error) {
    state.regError = error;
  },
  setLoginError(state, error) {
    state.loginError = error;
  },
};

const actions = {
  async regPost ({ commit }, form) {
    try {
      const intent = await getReg({
        ...form,
      })
      return intent
    } catch (err) {
      commit('setRegError', err)
    }
  },
  async loginPost ({ commit }, form) {
    try {
      const intent = await getLogin({
        ...form,
      })
      return intent
    } catch (err) {
      commit('setLoginError', err)
    }
  },
}

const getters = {
  regError: ({ regError }) => regError,
  regError: ({ loginError }) => loginError,
};

const state = () => ({
  regError: null,
  loginError: null
});

export default {
  mutations,
  getters,
  actions,
  state,
};
