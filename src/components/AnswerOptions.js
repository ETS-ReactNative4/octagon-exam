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
                <p className="text-muted">(Please Select one Option)</p>
                <table className="table table-striped table-bordered  table-responsive">
                    <tbody>
                        <tr>
                            <th scope="row"> <input type="radio" name="answer" value="A" checked={question.selectedOption === "A"} onClick={() => {this.pushAnswer("A")}}/></th>
                            <td className="col-md-1">Option A</td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="radio" name="answer" value="B" checked={question.selectedOption === "B"} onClick={() => {this.pushAnswer("B")}}/></th>
                            <td className="col-md-1">Option B</td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="radio" name="answer" value="C" checked={question.selectedOption === "C"} onClick={() => {this.pushAnswer("C")}}/></th>
                            <td className="col-md-1">Option C</td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="radio" name="answer" value="D" checked={question.selectedOption === "D"} onClick={() => {this.pushAnswer("D")}}/></th>
                            <td className="col-md-1">Option D</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}