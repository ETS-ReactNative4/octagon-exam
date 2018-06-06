import React, {Component} from 'react'
import PropTypes from "prop-types";

const AnswerExplanation = ({question}) => {
    return (
        <div>
            {question.explanation}
        </div>
    )
};

AnswerExplanation.PropTypes = {
    question: PropTypes.object.isRequired
};

export default AnswerExplanation;