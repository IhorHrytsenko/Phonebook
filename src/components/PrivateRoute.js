import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';


function PrivateRoute({auth, children, ...state}) {

    const isLogin =  auth.isLogin;

    return <Route {...state}>
        {isLogin ? children : <Redirect to="/Contacts" />}
        </Route>; 

}

const mapStateToProps = (state) => ({
    auth: state.auth,

})

export default connect (mapStateToProps, null)(PrivateRoute)