import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class QuestionPic extends Component{
    static propTypes = {
        picUrl : PropTypes.string.isRequired
    };

    render(){
        const {picUrl} = this.props;
        return (
            <div>
                <img className="img-fluid" src={process.env.REACT_APP_JAVA_APP_URL + "/resources/question-image/" + picUrl} />
               {/* Me Pic {picUrl} here*/}
            </div>
        )
    }

}
