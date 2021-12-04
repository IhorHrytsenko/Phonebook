import React from "react";
import {useDispatch} from 'react-redux';
import s from '../style/Register.module.css';
import operations from '../redux/auth/operationsAuth';



export default function Login() {

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault(); 

        console.log(event.target['password'].value);
        
        dispatch(operations.loginContacts({email: event.target['email'].value, password:event.target['password'].value}));
    }

    return (
        <form className={s.reg}  onSubmit={handleSubmit}>
            <label htmlFor="user_email" className={s.reg__field}>
                Email 
                <input type="email" name="email" id="user_email" />
            </label>

            <label htmlFor="user_password" className={s.reg__field}>
                Пароль 
                <input type="password" name="password" id="user_password" />
            </label>

            <button type="submit"> Войти </button>
        </form>
    )

}

