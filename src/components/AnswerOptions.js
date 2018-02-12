import React, {Component} from 'react'
import PropTypes from "prop-types";
import * as QuestionActions from '../actions/QuestionActions'
import * as Utils from '../utils/Utils'

export default class AnswerOptions extends Component {
    static propTypes = {
        question : PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        totalQuestion: PropTypes.number.isRequired
    };

    pushAnswer(value){
        const {dispatch, question, history, index, totalQuestion} = this.props;
        dispatch(QuestionActions.markAnswerTest(question, value));
        Utils.redirectToNextQuestion(history, index, totalQuestion);
        /*if(totalQuestion > (index + 1)){
            history.push("/" + parseInt(parseInt(index) + 1));
        } else{
            history.push("/");
        }*/

    }

    render(){
        const {question} = this.props;
        return(
            <div>
                Input choices here
                <input type="radio" name="answer" value="A" checked={question.selectedOption === "A"} onClick={() => {this.pushAnswer("A")}}/> Option A
                <input type="radio" name="answer" value="B" checked={question.selectedOption === "B"} onClick={() => {this.pushAnswer("B")}}/> Option B
                <input type="radio" name="answer" value="C" checked={question.selectedOption === "C"} onClick={() => {this.pushAnswer("C")}}/> Option C
                <input type="radio" name="answer" value="D" checked={question.selectedOption === "D"} onClick={() => {this.pushAnswer("D")}}/> Option D
            </div>
        )
    }
}