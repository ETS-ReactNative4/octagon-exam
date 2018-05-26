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
        totalQuestion: PropTypes.number.isRequired,
        settings: PropTypes.object
    };

    pushAnswer(value){
        const {dispatch, question, history, index, totalQuestion, settings} = this.props;
        if (question.selectedOption === null) {
            dispatch(QuestionActions.markAnswerTest(question, value));
        }

      //  Utils.redirectToNextQuestion(history, index, totalQuestion);


    }



    render(){
        const {question, settings} = this.props;
        const options = ['A', 'B', 'C', 'D'];
        return(
            <div className="margin-top-25">
                <div className="text-muted">(Please Select one Option)</div>
                <table className="table table-striped table-bordered  table-responsive">
                    <tbody>
                        {options.map((option) =>
                            <tr>
                                <th scope="row">
                                    {(settings.multipleAnswers) ?
                                        <input type="checkbox" name="answer" value={option} />
                                     :
                                        <input type="radio" name="answer" value={option} disabled={question.selectedOption !== null} checked={question.selectedOption === option} onClick={() => {this.pushAnswer(option)}}/>
                                    }
                                </th>
                                <td className="col-md-1">Option {option} {(option === question.correctOption) ?  <span className="text text-success bolder small margin margin-left-25"> >> Correct</span> : '' }
                                    {(option === question.selectedOption && question.correctOption !== question.selectedOption) ?  <span className="text text-danger small margin-left-25"> x Wrong Answer</span> : '' }
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}