import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ScoreBoard extends Component {
    static propTypes = {
        questions: PropTypes.array.isRequired,
    };

    correctCount(questions) {
        return questions.filter(question => question.answerCorrect && question.selectedOption != null).length;
    }

    render(){
       return (
        <div>
            <p><strong>Total Questions:</strong> {this.props.questions.length}</p>
            <p><strong>Wrong:</strong> 0</p>
            <p><strong>Correct:</strong> {this.correctCount(this.props.questions)}</p>
        </div>
       )
    }
}


