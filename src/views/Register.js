import React from "react";
import {useDispatch} from 'react-redux';
import s from '../style/Register.module.css';
import operations from '../redux/auth/operationsAuth';

const Registration = () => {

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault(); 

        dispatch(operations.registerContacts({name: event.target['text'].value, email: event.target['email'].value, password:event.target['password'].value}));
    }

    return (
        <form className={s.reg} onSubmit={handleSubmit}>

            <label htmlFor="user_name_register" className={s.reg__field}>
                Имя 
                <input type="text" name="text" id="user_name_register" />
            </label>

            <label htmlFor="user_email_register" className={s.reg__field}>
                Email 
                <input type="email" name="email" id="user_email_register" />
            </label>

            <label htmlFor="user_password_register" className={s.reg__field}>
                Пароль 
                <input type="password" name="password" id="user_password_register" />
            </label>
            <button type="submit"> Зарегистрироваться </button>
        </form>
    )

}


// const mapDispatchToProps = (dispatch) =>{
//     return {
//         registerContacts:(event) => {
//             event.preventDefault();

//             dispatch(operations.registerContacts({name: "ddddd", email: "1@1.com", password:"321321123"}));
//         }
// }
// }

// export default connect (null, mapDispatchToProps)(Registration)

export default Registration;

