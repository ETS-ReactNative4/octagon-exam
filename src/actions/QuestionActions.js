import * as ActionTypes from "../constants/ActionTypes";
import * as RestClient from "../api/RestClient";
import * as TimerActions from "./TimerActions";
import * as Utils from "../utils/Utils";

export function skipQuestion (questionId) {
    return (dispatch, getState) => {
       const { questionDuration } = getState();
       dispatch(TimerActions.resetPerQuestionTimer());
       RestClient.noteQuestionDurationTime(questionDuration.counter, questionId, dispatch, "SKIPPED");
       return ({ type: ActionTypes.SKIP_QUESTION, id: questionId});
    };
}

export function nextQuestion (questionId) {
    return (dispatch, getState) => {
        const { questionDuration } = getState();
        dispatch(TimerActions.resetPerQuestionTimer());
    };
}

export function markAnswer(id, selectedValue, isChecked = true){
    return { type: ActionTypes.MARK_ANSWER, id: id, selectedValue: selectedValue, isChecked: isChecked}
}

export function markAnswerCorrect(id, correctOption, explanation){
    return { type: ActionTypes.MARK_ANSWER_CORRECT, id: id, correctOption : correctOption, explanation: explanation}
}

export function markAnswerWrong(id, correctOption, explanation){
    return { type: ActionTypes.MARK_ANSWER_WRONG, id: id, correctOption: correctOption, explanation: explanation}
}

export function populateAnswerStats(id, answerStats){
    return { type: ActionTypes.POPULATE_ANSWER_STATS, id: id, timesAnswered: answerStats.timesAnswered, options: answerStats.options}
}

export function markAnswerTest(question, selectedOption) {
    return (dispatch, getState) => {
        const { questionDuration } = getState();
        dispatch(markAnswer(question.id, selectedOption));

        question.selectedOption = selectedOption; //hack

        RestClient.noteQuestionDurationTime(questionDuration.counter, question.id, dispatch, "ANSWERED");
        RestClient.matchAnswer(question, dispatch).then((json) => {
                if(question.selectedOption === json){
                    dispatch(markAnswerCorrect(question.id, json.correctOption, json.explanation));
                } else {
                    dispatch(markAnswerWrong(question.id, json.correctOption, json.explanation));
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

export function submitCheckboxAnswer(question){
    return (dispatch, getState) => {
        const { questionDuration } = getState();
        RestClient.noteQuestionDurationTime(questionDuration.counter, question.id, dispatch, "ANSWERED"); //TODO nowshad reactivate
        RestClient.matchAnswer(question, dispatch).then((json) => {
                if(Utils.answerMatches(question.selectedOption, json.correctOption, json.explanation)){
                    dispatch(markAnswerCorrect(question.id, json.correctOption, json.explanation));
                } else {
                    dispatch(markAnswerWrong(question.id, json.correctOption, json.explanation));
                }
            }
        );
        dispatch(TimerActions.resetPerQuestionTimer());

        RestClient.getAnswerStats(question, dispatch).then((json) => {
            dispatch(populateAnswerStats(question.id, json));
        });
    }
}

export function flagQuestion(question, flagValue) {
    return (dispatch, getState) => {
        RestClient.flagQuestion(question, dispatch, flagValue);
    }
}



