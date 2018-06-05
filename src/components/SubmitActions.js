import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as QuestionActions from "../actions/QuestionActions";

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
            <button className="btn btn-success" name="horror" disabled={question.selectedOption === null ? true : false} onClick={submitAnswer}>Submit Answer</button>
            :
            <button className="btn btn-warning" onClick={onSkipQuestionClicked}>Next</button>
        }
        <p className="margin-top-50">

        </p>
    </div>
    )
};





SubmitActions.propTypes = {
    onSkipQuestionClicked: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default SubmitActions;