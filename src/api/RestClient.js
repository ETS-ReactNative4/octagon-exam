

export const matchAnswer = (question) => {
    let serverResponse = {
        'id': 2,
        'picUrl': 'question-sample.png',
        'answer': 'A',
    };

    let responseFromServer = serverResponse; //restApi(question) -> check questionId and selectedOption

    if(question.id === responseFromServer.id
            && question.selectedOption === serverResponse.answer){
        return true;
    }
    return false;
};