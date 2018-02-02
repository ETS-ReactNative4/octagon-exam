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
                <img src={"/images/question/" + picUrl} />
                Me Pic {picUrl} here
            </div>
        )
    }

}
