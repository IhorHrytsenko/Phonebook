import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';



// решение через action
// const fetchContacts = () => async dispatch => {
//     dispatch(actions.fetchContactsRequest());
//     try{
//     const {data} = await axios.get(`https://619950b09022ea0017a7ae1c.mockapi.io/apiv1/contacts`)  
//     dispatch(actions.fetchContactsSuccess(data));
//     }
//     catch (error){
//         dispatch(actions.fetchContactsError(error));
//     }
// }


//прошлое API
// const fetchContacts = createAsyncThunk(
// 'contacts/fetchContacts',
// async () => 
// {
//     const {data} = await axios.get(`https://619950b09022ea0017a7ae1c.mockapi.io/apiv1/contacts`);
//     return data;
// })

// const fetchAddContacts = createAsyncThunk(
//     'contacts/fetchAddContacts', 
//     async ({name, number}) => {
//         const {data} = await axios.post(`https://619950b09022ea0017a7ae1c.mockapi.io/apiv1/contacts`,
//             {id: uuidv4(), name, number },  
//         );
//         return data;
// })

// const fetchDeleteContacts = createAsyncThunk(
//     'contacts/fetchDeleteContacts', 
//     async (id) => {
//         const {data} = await axios.delete(`https://619950b09022ea0017a7ae1c.mockapi.io/apiv1/contacts/${id}`);
//         return data;
// })

const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (credantials) => 
    {
        try{
        const {data} = await axios.get(`https://connections-api.herokuapp.com/contacts`, credantials);
        return data;
        }
        catch(error){
            console.log(error);
        }
    })
    
    const fetchAddContacts = createAsyncThunk(
        'contacts/fetchAddContacts', 
        async ({name, number}) => {

            try{
            const {data} = await axios.post(`https://connections-api.herokuapp.com/contacts`,
                { name, number },  
            );
            return data;
            }
            catch(error){
                console.log(error);
            }
    })
    
    const fetchDeleteContacts = createAsyncThunk(
        'contacts/fetchDeleteContacts', 
        async (id) => {
            try{
            await axios.delete(`https://connections-api.herokuapp.com/contacts/${id}`);
            return id;
            }
        catch(error){
            console.log(error);
        }
    })

const filterAction = createAction('contact/Filter');


const operations = {
    fetchContacts, 
    fetchAddContacts,
    fetchDeleteContacts,
    filterAction,
}

export default operations;

