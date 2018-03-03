

export function redirectToNextQuestion(history, index, totalQuestion){
    if(totalQuestion > (index + 1)){
        history.push("/" + parseInt(parseInt(index) + 1));
    } else{
        window.location = "http://localhost:8793/daily/exam/result";
    }
}