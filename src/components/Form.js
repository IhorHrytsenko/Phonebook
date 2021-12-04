import React, { useState } from 'react';
import {connect, useDispatch} from 'react-redux';
import operations from '../redux/operations';

const fetchAddContacts = operations.fetchAddContacts;

function Form (state) {

    const [id, setId] = useState('');
    const dispatch = useDispatch();

    function addContact(event) {
        event.preventDefault();
        if (id !== event.target.value)
        {
            setId(event.target.value);
        }
    };

    function apiAddContacts (event){
        event.preventDefault();

        if(state.contacts.some(contact => contact.name === event.target.name.value)){
            alert(`Контакт с таким именем ${event.target.name.value} уже существует`);
            return;
        }
        else {
            dispatch(fetchAddContacts({name: event.target.name.value, number: event.target.number.value}));
        }

    }

        return (
        <form className="form" onSubmit={apiAddContacts}>
        <label htmlFor="name" className="form__label">
            ФИО: </label>
        <input
            className="form__field"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            id="name"
            onChange={addContact}
        />
        
        <label htmlFor="number" className="form__label">
            Номер телефона: </label>
        <input
            className="form__field"
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            id="number"
            onChange={addContact}
        />
          
        <button type="submit" className="form__button">Добавить контакт</button>
    </form>
)}

const mapStateToProps = (state) => ({
    contacts: state.phonebook.contacts,

})
   
export default connect(mapStateToProps, null)(Form)
  