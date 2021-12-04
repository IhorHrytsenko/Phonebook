import React from 'react';
import {connect} from 'react-redux';
import '../App.css';
import ContactList from '../components/ContactList';
import Form from '../components/Form';
import operations from '../redux/operations';

function Contacts(state) {

   return (   
<div className="App">
<h2>Телефонная книга</h2>
<Form />

<h2>Контакты</h2>
<label>Поиск по ФИО:</label>
<input
  className="form__field"
  name="filter"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  type="text"
  onChange={state.filterContact}
/>

<ContactList />
</div>

)
}

const mapDispatchToProps = (dispatch) => {
   
    return {
      filterContact: (event) => {
        dispatch(operations.filterAction(event.target.value.toLowerCase()));
      }
    }
  
  }


 export default connect(null, mapDispatchToProps)(Contacts)