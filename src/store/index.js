import { createStore } from 'vuex'

import products from '../modules/administrador/store/products';
import categoria from '../modules/administrador/store/categories';
import authStore from '../modules/auth/store/auth';

// Create a new store instance.
const store = createStore({
    modules:{
        products,
        categoria,
        authStore
    }
})

export default store;