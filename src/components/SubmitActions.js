import React, {Component} from 'react'
import PropTypes from 'prop-types'

const SubmitActions = ({onSkipQuestionClicked}) => (
    <div>
        <p>

        </p>
        <button className="btn btn-warning" onClick={onSkipQuestionClicked}>Skip Question</button>
        <p className="margin-top-50">

        </p>
    </div>
);

SubmitActions.propTypes = {
    onSkipQuestionClicked: PropTypes.func.isRequired
};

export default SubmitActions;