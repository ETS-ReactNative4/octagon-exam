import * as ActionTypes from "../constants/ActionTypes";

export function resetPerQuestionTimer(){
    return { type: ActionTypes.RESET_PER_QUESTION_TIMER,  counter: 0}
}

export function incrementPerQuestionTimer(){
    return { type: ActionTypes.INCREMENT_PER_QUESTION_TIMER}
}

export function setStartToFalse(){
    return { type: ActionTypes.SET_START_TO_FALSE, start: false}
}


