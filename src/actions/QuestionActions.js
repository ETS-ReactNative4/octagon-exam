import * as ActionTypes from "../constants/ActionTypes";

export const skipQuestion = (id) => ({ type: ActionTypes.SKIP_QUESTION, id: id});

/*
export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })*/
