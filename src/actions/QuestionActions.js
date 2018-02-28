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
export function markAnswer(id, selectedOption){
    return { type: ActionTypes.MARK_ANSWER, id: id, selectedOption: selectedOption}
}

export function markAnswerCorrect(id){
    return { type: ActionTypes.MARK_ANSWER_CORRECT, id: id}
}

export function markAnswerTest(question, selectedOption) {
    return (dispatch, getState) => {
        const { questionDuration } = getState();
        dispatch(markAnswer(question.id, selectedOption));

        question.selectedOption = selectedOption; //hack

        RestClient.noteQuestionDurationTime(questionDuration.counter, question.id, dispatch, "ANSWERED");
        RestClient.matchAnswer(question, dispatch).then((output) => {
                if(output){
                    dispatch(markAnswerCorrect(question.id));

                } else {
                  //  alert("wrong answer");
                }
            }
        );
        dispatch(TimerActions.resetPerQuestionTimer());
    }
}

/*
export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })*/
