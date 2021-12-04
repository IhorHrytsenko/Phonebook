import { v4 as uuidv4 } from 'uuid';
import style from './ContactList.module.css';
import React, { useEffect } from 'react';
import {connect, useDispatch} from 'react-redux';
import operations from '../redux/operations';

const fetchDeleteContacts = operations.fetchDeleteContacts;
const fetchContacts = operations.fetchContacts;

function ContactList(state) {

    const dispatch = useDispatch();

    const handleDelete = (event) => {

        state.fetchDeleteContacts(event.target.id);
        state.fetchContacts(state.auth.token)
    }

    useEffect(() =>{ 
        dispatch(operations.fetchContacts(state.auth.token))
    },[dispatch, state.auth.token])


    if (state.filter.length === 0){
        return (
                <ul className="contact__list">
                    {  state.contacts.map(({ name, number, id }) => (
                        <li className="contact__item" key={uuidv4()} >
                            {name}: {number}
                            <button type="button" onClick={handleDelete} className={style.contact__delete} id={id}> Удалить</button>
                        </li> ))
                    }
                </ul>
            )
    }
    if (state.filter.length !== 0){
        return (
                <ul className="contact__list">
                    {  state.contacts.filter(contact => contact.name.toLowerCase().includes(state.filter)).map(({ name, number, id }) => (
                        <li className="contact__item" key={uuidv4()} >
                            {name}: {number}
                            <button type="button" onClick={handleDelete} className={style.contact__delete} id={id}> Удалить</button>
                        </li> ))
                    }
                </ul>
            )
    }
        
}

const mapStateToProps = state => ({
   contacts: state.phonebook.contacts,
   filter: state.phonebook.filter,
   auth: state.auth,
})

const mapDispatchToProps = dispatch => ({
    fetchDeleteContacts: id =>{
        dispatch(fetchDeleteContacts(id))
    
    },

    fetchContacts: token => {
        dispatch(fetchContacts(token))
    }, 
})
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
  

