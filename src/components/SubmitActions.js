import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as QuestionActions from "../actions/QuestionActions";
import * as Utils from "../utils/Utils";

const SubmitActions = ({onSkipQuestionClicked, settings, dispatch, question}) => {
    function submitAnswer(event){
        console.log( event.target.name);
        dispatch(QuestionActions.submitCheckboxAnswer(question));
        /* const {question} = this.props;
         if (question.selectedOption === null) {
            // dispatch(QuestionActions.markAnswerTest(question, value));
         }*/
    }

    return(
    <div>
        {settings.multipleAnswers
            ?
            <MultipleAnswersSubmitButtons question={question} submitAnswer={submitAnswer} onSkipQuestionClicked={onSkipQuestionClicked}/>
            :
            <button className="btn btn-warning" onClick={onSkipQuestionClicked}>Next</button>
        }
        <p className="margin-top-50">

        </p>
    </div>
    )
};

function MultipleAnswersSubmitButtons(props){
    const {submitAnswer, question, onSkipQuestionClicked} = props;
    if(question.correctOption == null){
        return <button className="btn btn-success" name="horror" disabled={question.selectedOption === null ? true : false} onClick={submitAnswer}>Submit Answer</button>
    }
    return <button className="btn btn-success" onClick={onSkipQuestionClicked}>Next</button>
}





SubmitActions.propTypes = {
    onSkipQuestionClicked: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default SubmitActions;