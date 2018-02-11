import * as ActionTypes from "../constants/ActionTypes";
import * as RestClient from "../api/RestClient";

export const skipQuestion = (id) => ({ type: ActionTypes.SKIP_QUESTION, id: id});
export function markAnswer(id, selectedOption){
    return { type: ActionTypes.MARK_ANSWER, id: id, selectedOption: selectedOption}
}

export function markAnswerTest(question, selectedOption) {
    return dispatch => {
        dispatch(markAnswer(question.id, selectedOption));

        question.selectedOption = selectedOption; //hack
        if(RestClient.matchAnswer(question)){
            alert("Correct answer");
        } else {
            alert("wrong answer");
        }


    }
}

/*
export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })*/
