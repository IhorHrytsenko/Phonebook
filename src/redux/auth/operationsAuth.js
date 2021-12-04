import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const token = {
    set (token) {
        axios.defaults.headers.common.Authorization = `${token}`
    },

    unset(){
        axios.defaults.headers.common.Authorization = ``;
    },

}


    const registerContacts = createAsyncThunk('contacts/registerContacts',
        async (credentials) => {
            try{
            const {data} = await axios.post(`https://connections-api.herokuapp.com/users/signup`, credentials);
                token.set(data.token);
            return data;
            }
            catch(error){
                console.log(error);
            }
        })


    const loginContacts = createAsyncThunk('contacts/loginContacts', 
        async (credentials) => {
            try{
            const {data} = await axios.post(`https://connections-api.herokuapp.com/users/login`, credentials);
            token.set(data.token);
            return data;
            }
            catch(error){
                console.log(error);
            }
        })

    const refreshContacts = createAsyncThunk('contacts/refreshContacts', 
        async (_, thunkAPI) => {
            const state = thunkAPI.getState();
            const pesistedToken = state.auth.token;

            if (pesistedToken === null){
                return thunkAPI.rejectWithValue();
            }

            token.set(pesistedToken);
        try{
            
            const {data} = await axios.get(`https://connections-api.herokuapp.com/users/current`);
            return data;  

        }
            catch(error){
                console.log(error);
            }
        })

    const logoutContacts = createAsyncThunk('contacts/logoutContacts', 
        async () => {
            try{
            const {data} = await axios.post(`https://connections-api.herokuapp.com/users/logout`);
            
            token.unset();

            return data;
            }
            catch(error){
                console.log(error);
            }
        })
    

const operationsAuth = {
    registerContacts,
    loginContacts,
    logoutContacts,
    refreshContacts,
}


export default operationsAuth;