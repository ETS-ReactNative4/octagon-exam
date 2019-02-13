

export function redirectToNextQuestion(history, index, totalQuestion){
    if(totalQuestion > (index + 1)){
        history.push("/question/" + parseInt(parseInt(index) + 1));
    } else{
        history.push("/result");
        //window.location = "http://localhost:8793/daily/exam/result";
    }
}

export function answerMatches(selectedOptions, correctOptions){
    return correctOptions.sort().toString() === selectedOptions.sort().toString();
}

export function answerContains(selectedOption, correctOptions){
    if(correctOptions == null){
        return false;
    }
    return correctOptions.indexOf(selectedOption) >= 0;
}

export function countAnswerCorrect(questions){
    return questions.filter(question => question.answerCorrect).length;
}

export function countAnswerWrong(questions){
    return questions.filter(question => question.answerCorrect !== null && !question.answerCorrect).length;
}

