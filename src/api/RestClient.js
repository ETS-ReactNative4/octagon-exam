import fetch from 'cross-fetch'
import * as ActionTypes from "../constants/ActionTypes";

export let matchAnswer = (question, dispatch) => {
      return fetch("http://localhost:8793/api/question/" + question.id + "/answer/" + question.selectedOption)
            .then(response => response.json(),
                error => {
                    console.log('An error occurred.', error);
                   // const json = error.json();
                  /*  if(json.type === "AUTHENTICATION_ERROR"){*/
                        dispatch(authError());
                /*    }*/
                }
            )
            .then(json => {console.log(json);
                return json} );
};

function authError(){
    return { type: ActionTypes.AUTHENTICATION_ERROR}
}

export let getRandomQuestions = (limit) => {
    return fetch("http://localhost:8793/api/questions/" + limit + "/subject/1")
        .then(response => response.json(), error => console.log('An error occurred.', error))
        .then(json => {
            console.log(json);
            json.auth = { userAuthenticated : true};
            return json
        });
};