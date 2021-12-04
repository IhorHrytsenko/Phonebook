import React from "react";
import { connect, useDispatch } from "react-redux";
import {NavLink} from 'react-router-dom';
import s from '../style/MainMenu.module.css';
import operations from '../redux/auth/operationsAuth';

const logoutContacts = operations.logoutContacts;

const MainMenu = (state) => {

    const dispatch = useDispatch();

    const handleClick = () =>{

        dispatch(logoutContacts(state.auth.token))
    }

    return (
        <ul className={s.menu}>
        {state.auth.isLogin && <li className={s.menu__item}>Привет, {state.auth.user.name}</li>}
        {!state.auth.isLogin && <li className={s.menu__item}><NavLink to="/Login" className={s.menu__link}>Логин....</NavLink></li>}  
        {!state.auth.isLogin && <li className={s.menu__item}><NavLink to="/Register" className={s.menu__link}>Регистрация</NavLink></li>}
        {state.auth.isLogin && <li className={s.menu__item}><NavLink to="/Contacts" className={s.menu__link}>Контакты</NavLink></li>}
        {state.auth.isLogin && <li className={s.menu__item}><NavLink to="/" className={s.menu__link}><button type='button' onClick={handleClick}>Выход</button></NavLink></li>}
        </ul>
    )

}

const mapStateToProps = (state) => ({
    auth: state.auth,

})

// const mapDispatchToProps = (dispatch) => {
    
//     console.log(dispatch);

//     return {
//         logoutContacts: dispatch(logoutContacts())

// }}


export default connect(mapStateToProps, null)(MainMenu);


// export default MainMenu;