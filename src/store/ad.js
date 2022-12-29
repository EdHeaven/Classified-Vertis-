import { getAd, getAds } from '@/services/ads.service';

const mutations = {
  setAd(state, ad) {
    state.ad = ad;
  },
  setAds(state, ads) {
    state.ads = ads;
  },
  setAdError(state, error) {
    state.adError = error;
  },
};

const actions = {
  async fetchAd({ commit }, id) {
    try {
      const ad = await getAd(id);
      commit('setAd', ad);
    } catch (err) {
      commit('setAdError', err);
    }
  },
  async fetchAds({ commit }) {
    try {
      const ads = await getAds();
      commit('setAds', ads);
    } catch (err) {
      commit('setAdError', err);
    }
  },
};

const getters = {
  ad: ({ ad }) => ad,
  ads: ({ ads }) => ads,
  adError: ({ adError }) => adError,
};

const state = () => ({
  ad: {},
  ads: [],
  adError: null,
});

export default {
  mutations,
  getters,
  actions,
  state,
};
