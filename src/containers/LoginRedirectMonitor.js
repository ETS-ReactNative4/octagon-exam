import { connect } from 'react-redux'

const LoginRedirectMonitor = ({dispatch, authenticated}) => {
    if(!authenticated){
        window.location = "http://google.com";
    }
    return null;
};

const mapStateToProps = (state) => ({
    authenticated: state.auth.userAuthenticated
});



export default connect(mapStateToProps, null)(LoginRedirectMonitor);