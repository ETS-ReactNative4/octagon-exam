import { connect } from 'react-redux'

const LoginRedirectMonitor = ({dispatch, authenticated}) => {
    if(!authenticated){
        window.location = process.env.REACT_APP_JAVA_APP_URL + "/login";
    }
    return null;
};

const mapStateToProps = (state) => ({
    authenticated: state.auth.userAuthenticated
});



export default connect(mapStateToProps, null)(LoginRedirectMonitor);