import * as ActionTypes from "../constants/ActionTypes";
import * as RestClient from "../api/RestClient";
import * as TimerActions from "./TimerActions";

export function skipQuestion (questionId) {
    return (dispatch, getState) => {
       const { questionDuration } = getState();
       dispatch(TimerActions.resetPerQuestionTimer());
       RestClient.noteQuestionDurationTime(questionDuration.counter, questionId, dispatch, "SKIPPED");
       return ({ type: ActionTypes.SKIP_QUESTION, id: questionId});
    };
}
export function markAnswer(id, selectedValue, isChecked = true){
    return { type: ActionTypes.MARK_ANSWER, id: id, selectedValue: selectedValue, isChecked: isChecked}
}

export function markAnswerCorrect(id, correctOption){
    return { type: ActionTypes.MARK_ANSWER_CORRECT, id: id, correctOption : correctOption}
}

export function markAnswerWrong(id, correctOption){
    return { type: ActionTypes.MARK_ANSWER_WRONG, id: id, correctOption: correctOption}
}

export function markAnswerTest(question, selectedOption) {
    return (dispatch, getState) => {
        const { questionDuration } = getState();
        dispatch(markAnswer(question.id, selectedOption));

        question.selectedOption = selectedOption; //hack

        RestClient.noteQuestionDurationTime(questionDuration.counter, question.id, dispatch, "ANSWERED");
        RestClient.matchAnswer(question, dispatch).then((output) => {
                if(question.selectedOption === output){
                    dispatch(markAnswerCorrect(question.id, output));
                } else {
                    dispatch(markAnswerWrong(question.id, output));
                  //  alert("wrong answer");
                }
            }
        );
        dispatch(TimerActions.resetPerQuestionTimer());
    }
}

export function pushCheckboxAnswer(question, selectedValue, isChecked){
    return (dispatch, getState) => {
        dispatch(markAnswer(question.id, selectedValue, isChecked));
    }
}



