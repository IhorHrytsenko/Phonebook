import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';


function PublicRoute({auth, children, restricted = false, ...state}) {

    const isLogin = auth.isLogin;
    const shouldRedirect = isLogin && restricted

    return <Route {...state}>{ shouldRedirect ? <Redirect to='/' /> : children}</Route>

}

const mapStateToProps = (state) => ({
    auth: state.auth,

})

export default connect (mapStateToProps, null)(PublicRoute)