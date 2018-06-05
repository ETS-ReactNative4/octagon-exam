import * as ActionTypes from '../constants/ActionTypes'
const initialState = [
    {
        id: 0,
        "isAnswered": false,
        'picUrl' : '/images/question-sample.png',
        'answer' : 'A',
        'selectedOption' : null
    }

];

export default function QuestionReducer(state = [], action) {
    switch (action.type) {
        case "MARK_ANSWER" :
            return state.map(answer => {
                if(answer.id === action.id){
                    const savedOptions = new Set(answer.selectedOption);
                    if(action.isChecked){
                        savedOptions.add(action.selectedValue);
                    } else {
                        savedOptions.delete(action.selectedValue);
                    }

                    return {...answer, isAnswered: true,  selectedOption: [...savedOptions]}
                } else {
                    return answer;
                }
            });
        case ActionTypes.SKIP_QUESTION :
         //   alert("SKIP_QUESTION " + action.id);
            return state.map(question =>
                question.id === action.id
                ? {...question, skipped: true}
                :question);
        case ActionTypes.MARK_ANSWER_CORRECT:
            return state.map(question =>
                question.id === action.id
                ? {...question, answerCorrect: true, correctOption: [...action.correctOption]}
                : question
            );
        case ActionTypes.MARK_ANSWER_WRONG:
            return state.map(question =>
                question.id === action.id
                ? {...question, answerCorrect: false, correctOption: [...action.correctOption]}
                : question
            );
        default:
            return state
    }
}