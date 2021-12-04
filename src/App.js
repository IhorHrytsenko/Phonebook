import React, {lazy, Suspense, useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import {Switch} from 'react-router-dom';
import operations from './redux/auth/operationsAuth';
import PrivateRoute from './components/PrivateRoute'; 
import PublicRoute from './components/PublicRoute';

const MainMenu = lazy(() => import('./views/MainMenu.js'));
const Register = lazy(() => import('./views/Register.js'));
const Contacts = lazy(() => import('./views/Contacts.js'));
const Login = lazy(() => import('./views/Login.js'));
const HomeView = lazy(() => import('./views/HomeView.js')); 


const App = (state) => {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(operations.refreshContacts())

  }, [dispatch])

  return (!state.auth.ifRefresh && (

    <Suspense fallback={<h1>AAAAAВСТРАААААЛИЯЯЯЯ!!!</h1>}>

    <MainMenu />
 
    <Switch>
        <PublicRoute path='/' exact>
          <HomeView />
        </PublicRoute>

        <PublicRoute path='/Login' exact restricted>
          <Login />
        </PublicRoute>

        <PublicRoute path='/Register' exact restricted>
          <Register />
        </PublicRoute>
        
        <PrivateRoute path='/Contacts/' exact>
          <Contacts />
        </PrivateRoute>
    </Switch>
    
    </Suspense>


  ));
}

const mapStateToProps = (state) => ({
  auth: state.auth,

})


export default connect(mapStateToProps, null)(App);
