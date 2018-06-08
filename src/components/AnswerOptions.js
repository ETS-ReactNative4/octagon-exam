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

    pushAnswer(value, event){
        const {dispatch, question, history, index, totalQuestion, settings} = this.props;
        if(settings.multipleAnswers){
            console.log("selected? ", event.target.checked);
            dispatch(QuestionActions.pushCheckboxAnswer(question, value, event.target.checked));
        }else if (question.selectedOption.length === 0) {
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
                                        <input type="checkbox" name="answer" value={option} checked={question.selectedOption !== null && question.selectedOption.indexOf(option) >= 0} onClick={(event) => {this.pushAnswer(option, event)}}/>
                                     :
                                        <input type="radio" name="answer" value={option} disabled={question.selectedOption.length > 0} checked={question.selectedOption === option} onClick={() => {this.pushAnswer(option)}}/>
                                    }
                                </th>
                                <td className="col-md-1">Option {option}  <MarkRightWrong option={option} question={question} />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

function MarkRightWrong(props){
    const {question, option} = props;
    let selection = true;
    if(question.correctOption === undefined){
        selection = false;
    }

    if(selection && Utils.answerContains(option, question.correctOption)){
        return <span className="text text-success bolder small margin margin-left-25"> <i className="fa fa-check" aria-hidden="true" /> Correct</span>
    } else if(selection && question.selectedOption.indexOf(option) >= 0){
        return <span className="text text-danger small margin-left-25"> <i className="fa fa-times" aria-hidden="true"/> Wrong Answer</span>
    }
    return null;
}