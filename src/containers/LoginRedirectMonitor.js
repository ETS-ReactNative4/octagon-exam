import { connect } from 'react-redux'
import * as Configuration from "../utils/Configuration"

const LoginRedirectMonitor = ({dispatch, authenticated}) => {
    if(!authenticated){
        window.location = Configuration.serverUrl() + "/login";
    }
    return null;
};

const mapStateToProps = (state) => ({
    authenticated: state.auth.userAuthenticated
});



export default connect(mapStateToProps, null)(LoginRedirectMonitor);