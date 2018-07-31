import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as QuestionActions from "../actions/QuestionActions";
import * as Utils from "../utils/Utils";
import Alert from 'react-s-alert';


const SubmitActions = ({onSkipQuestionClicked, onNextQuestionClicked, settings, dispatch, question}) => {
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
        Alert.success('Question has been flagged', {
            position: 'bottom-right'
        });
    }

    return(
    <div>
        {settings.multipleAnswers
            ?
            <MultipleAnswersSubmitButtons question={question} submitAnswer={submitAnswer} onNextQuestionClicked={onNextQuestionClicked} onSkipQuestionClicked={onSkipQuestionClicked}/>
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
    const {submitAnswer, question, onNextQuestionClicked, onSkipQuestionClicked} = props;
    if(question.correctOption == null){
        return <span>
            <button className="btn btn-success" name="submitTheAnswer" disabled={question.selectedOption === null ? true : false} onClick={submitAnswer}>Submit Answer</button>
            <button className="btn btn-secondary margin-left-25" onClick={onSkipQuestionClicked}>Skip</button>
        </span>
    }
    return <button className="btn btn-success" onClick={onNextQuestionClicked}>Next</button>
}

function FlagQuestion(props) {
    const {flagQuestion} = props;
    return <div className="dropdown pull-right">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="flagMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            It appears to me that...
        </button>
        <div className="dropdown-menu" aria-labelledby="flagMenuButton">
            <button className="dropdown-item" onClick={flagQuestion} value={1}>The correct answer is not in the options</button>
            <button className="dropdown-item" onClick={flagQuestion} value={2}>There is a mistake in the question</button>
            <button className="dropdown-item" onClick={flagQuestion} value={3}>The given correct answer is not the actual correct one</button>
            <button className="dropdown-item" onClick={flagQuestion} value={4}>This question is not relevant to my course syllabus</button>
        </div>
    </div>
}




SubmitActions.propTypes = {
    onSkipQuestionClicked: PropTypes.func.isRequired,
    onNextQuestionClicked: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default SubmitActions;