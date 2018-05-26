import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as QuestionActions from "../actions/QuestionActions";

const SubmitActions = ({onSkipQuestionClicked, settings}) => (
    <div>
        <p>

        </p>
        {settings.multipleAnswers
            ?
            <button className="btn btn-success" onClick={submitAnswer()}>Submit Answer</button>
            :
            <button className="btn btn-warning" onClick={onSkipQuestionClicked}>Next</button>
        }
        <p className="margin-top-50">

        </p>
    </div>
);

function submitAnswer(value){
    const {dispatch, question} = this.props;
    if (question.selectedOption === null) {
        dispatch(QuestionActions.markAnswerTest(question, value));
    }
}

SubmitActions.propTypes = {
    onSkipQuestionClicked: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired,
};

export default SubmitActions;