import { createStore } from 'vuex'
import ad from './ad';
import category from './category';


export default createStore({

  modules: {
    ad,
    category,
  }
})
