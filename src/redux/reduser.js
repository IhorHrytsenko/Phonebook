import { createReducer, combineReducers } from "@reduxjs/toolkit";
import operations from './operations';


const LocalStore = {
    contacts: [],
    filter: '',

}



const contacts = createReducer([], {
    [operations.fetchContacts.fulfilled]: (_, {payload}) => payload,

    [operations.fetchAddContacts.fulfilled]: (state, {payload}) => {

            state = [...state, payload];
            return state;

    },

    [operations.fetchDeleteContacts.fulfilled]: (state, {payload}) => {

        state = state.filter(({id}) => id !== payload);

        return state;
    }

})

const filter = createReducer(LocalStore.filter, {
    [operations.filterAction]: (state, {payload}) => {

       
        if (payload !== ''){
            return state = payload;
        }
        
        if (payload === '') {
            return LocalStore.filter;
        }
            return LocalStore.filter;
    }

})


// const isLoading = createReducer (false, {
//     [actions.fetchContactsRequest]: () => true,
//     [actions.fetchContactsSuccess]: () => false,
//     [actions.fetchContactsError]: () => false,
// })

export default combineReducers({
    contacts,
    filter,
})
