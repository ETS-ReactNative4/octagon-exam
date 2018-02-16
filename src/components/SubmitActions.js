import React, {Component} from 'react'
import PropTypes from 'prop-types'

const SubmitActions = ({onSkipQuestionClicked}) => (
    <div>
        <p>
            Hint
        </p>
        <button className="btn btn-warning" onClick={onSkipQuestionClicked}>Skip Question</button>
    </div>
);

SubmitActions.propTypes = {
    onSkipQuestionClicked: PropTypes.func.isRequired
};

export default SubmitActions;