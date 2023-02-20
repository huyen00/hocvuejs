
// store modules
import dataGame from './dataGame/store'
import contacts from './contacts/store'
// main store
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
export default {
    namespaced: true,
    modules: {
        dataGame,
        contacts
    },
    state,
    mutations,
    actions,
    getters,
};