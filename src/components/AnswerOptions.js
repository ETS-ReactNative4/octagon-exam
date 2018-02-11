import React, {Component} from 'react'
import PropTypes from "prop-types";
import * as QuestionActions from '../actions/QuestionActions'

export default class AnswerOptions extends Component {
    static propTypes = {
        question : PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };




    render(){
        const {dispatch, question} = this.props;
        return(
            <div>
                Input choices here
                <input type="radio" name="answer" value="A" onClick={() => dispatch(QuestionActions.markAnswerTest(question, "A"))}/> Option A
               {/* <input type="radio" name="answer" value="B" onClick={() => dispatch(QuestionActions.markAnswer(question.id))}/> Option B*/}
                <input type="radio" name="answer" value="C" /> Option C
                <input type="radio" name="answer" value="D" /> Option D
            </div>
        )
    }
}