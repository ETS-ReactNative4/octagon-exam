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

    function flagQuestion(event) {
        dispatch(QuestionActions.flagQuestion(question, event.target.value));
    }

    return(
    <div>
        {settings.multipleAnswers
            ?
            <MultipleAnswersSubmitButtons question={question} submitAnswer={submitAnswer} onSkipQuestionClicked={onSkipQuestionClicked}/>
            :
            <button className="btn btn-warning" onClick={onSkipQuestionClicked}>Next</button>
        }
        <FlagQuestion question={question} flagQuestion={flagQuestion} />
        <p className="margin-top-50">

        </p>
    </div>
    )
};

function MultipleAnswersSubmitButtons(props){
    const {submitAnswer, question, onSkipQuestionClicked} = props;
    if(question.correctOption == null){
        return <button className="btn btn-success" name="submitTheAnswer" disabled={question.selectedOption === null ? true : false} onClick={submitAnswer}>Submit Answer</button>
    }
    return <button className="btn btn-success" onClick={onSkipQuestionClicked}>Next</button>
}

function FlagQuestion(props) {
    const {flagQuestion} = props;
    return <div className="dropdown pull-right">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="flagMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Flag
        </button>
        <div className="dropdown-menu" aria-labelledby="flagMenuButton">
            <button className="dropdown-item" onClick={flagQuestion} value={1}>Answer not here</button>
            <button className="dropdown-item" onClick={flagQuestion} value={2}>Question is wrong</button>
            <button className="dropdown-item" onClick={flagQuestion} value={9}>Other</button>
        </div>
    </div>
}




SubmitActions.propTypes = {
    onSkipQuestionClicked: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default SubmitActions;