import fetch from 'cross-fetch'

export let matchAnswer = (question) => {
    return fetch("http://localhost:8793/api/question/" + question.id + "/answer/" + question.selectedOption)
        .then(response => response.json(), error => console.log('An error occurred.', error))
        .then(json => {console.log(json);
            return json} );
};

export let getRandomQuestions = (limit) => {
    return fetch("http://localhost:8793/api/questions/" + limit + "/subject/1")
        .then(response => response.json(), error => console.log('An error occurred.', error))
        .then(json => {console.log(json);
            return json} );
};