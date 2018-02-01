import React, {Component} from 'react'
import questionPicUrl from '../static/images/question/question-sample.png'
import PropTypes from 'prop-types'

export default class QuestionPic extends Component{
    static propTypes = {
        picUrl : PropTypes.string.isRequired
    };

    render(){
        return (
            <div>
                <img src={questionPicUrl} />
                Me Pic {this.props.picUrl} here
            </div>
        )
    }

}
