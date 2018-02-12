import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ScoreBoard extends Component {
    static propTypes = {
        questions: PropTypes.array.isRequired,
    };

    correctCount(questions) {
        return questions.filter(question => question.answerCorrect && question.selectedOption != null).length;
    }

    wrongCount(questions) {
        return questions.filter(question => !question.answerCorrect && question.selectedOption != null).length;
    }

    percentageCorrect(questions){
        const correct = this.correctCount(questions);
        if(correct === 0){
            return 0;
        }
        return (correct/(correct + this.wrongCount(questions))) * 100;
    }

    render(){
        const {questions} = this.props;
       return (
        <div>
            <h1>{this.percentageCorrect(questions)}%</h1>
            <p><strong>Total Questions:</strong> {this.props.questions.length}</p>
            <p><strong>Wrong:</strong> {this.wrongCount(questions)}</p>
            <p><strong>Correct:</strong> {this.correctCount(questions)}</p>
        </div>
       )
    }
}


