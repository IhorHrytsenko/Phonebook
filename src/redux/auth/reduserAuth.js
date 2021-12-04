import { createSlice } from "@reduxjs/toolkit";
import operations from './operationsAuth';


const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLogin: false,
    ifRefresh: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers:{
        [operations.registerContacts.fulfilled](state, action){

            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogin = true;
        },

        [operations.loginContacts.fulfilled](state, action){

            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLogin = true;
        },



        [operations.logoutContacts.fulfilled](state, _){

            //иначе не обрабатывается изменение стилей в MainMenu
            state.isLogin = false;
            state.user.name = null;
            state.user.email = null;
            state.token = null;
        },

        [operations.refreshContacts.pending](state){
            state.ifRefresh = true;
        },

        [operations.refreshContacts.fulfilled](state, action){

            state.user = {...action.payload};
            state.isLogin = true;
            state.ifRefresh = false;
        },
        
        [operations.refreshContacts.rejected](state){
            state.ifRefresh = false;
        }
    },

});

export default authSlice.reducer;