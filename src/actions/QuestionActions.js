import * as ActionTypes from "../constants/ActionTypes";
import * as RestClient from "../api/RestClient";
import * as TimerActions from "./TimerActions";

export const skipQuestion = (id) => ({ type: ActionTypes.SKIP_QUESTION, id: id});
export function markAnswer(id, selectedOption){
    return { type: ActionTypes.MARK_ANSWER, id: id, selectedOption: selectedOption}
}

export function markAnswerCorrect(id){
    return { type: ActionTypes.MARK_ANSWER_CORRECT, id: id}
}

export function markAnswerTest(question, selectedOption) {
    return dispatch => {
        dispatch(markAnswer(question.id, selectedOption));

        question.selectedOption = selectedOption; //hack
        RestClient.matchAnswer(question, dispatch).then((output) => {
                if(output){
                    dispatch(markAnswerCorrect(question.id));
                    dispatch(TimerActions.resetPerQuestionTimer());

                } else {
                  //  alert("wrong answer");
                }
            }
        );
    }
}

/*
export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })*/
