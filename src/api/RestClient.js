import fetch from 'cross-fetch'
import * as ActionTypes from "../constants/ActionTypes";
import * as TokenHolder from "../utils/TokenHolder";
import * as Configuration from "../utils/Configuration";

export let matchAnswer = (question, dispatch) => {
    return fetch(Configuration.serverUrl() + "/api/question/" + question.id + "/answer/" + question.selectedOption,
        {
            headers: {
                "Authorization": "Bearer " + TokenHolder.getJwtToken(),
            }
        })
            .then(response => response.json(),
                error => {
                    console.log('An error occurred.', error);
                   // const json = error.json();
                  /*  if(json.type === "AUTHENTICATION_ERROR"){*/
                        dispatch(authError());
                /*    }*/
                }
            )
            .then(json => {
                console.log(json);
                console.log("jwtToken " + TokenHolder.getJwtToken());
                return json.success} );
};

export let noteQuestionDurationTime = (count, questionId, dispatch, action) => {
    return fetch(Configuration.serverUrl() + "/api/question/" + questionId + "/time-count/" + count + "/action/" + action,
        {
            headers: {
                "Authorization": "Bearer " + TokenHolder.getJwtToken(),
            }
        })
            .then(() => {},
                error => {
                    console.log('An error occurred.', error);
                   // const json = error.json();
                  /*  if(json.type === "AUTHENTICATION_ERROR"){*/
                        dispatch(authError());
                /*    }*/
                }
            );
};

function authError(){
    return { type: ActionTypes.AUTHENTICATION_ERROR}
}

export let getRandomQuestions = (limit) => {
        return fetch(Configuration.serverUrl() + "/api/questions/" + limit + "/subject/1/etoken/",
            {
                headers: {
                    "encryptedUserId" : defaultValueUser()
                }
            })
            .then(response => {
                TokenHolder.setJwtToken(response.headers.get("jwtToken"));
                return response.json();
            }, error => console.log('An error occurred. questions', error))
            .then(json => {
                console.log("questions suc"  + json);
              //  console.log(json);
                json.auth = { userAuthenticated : true};
                json.questionDuration = {start: true};
                return json
            });
};

export function defaultValueUser() {
    if(getParameterByName("u") != null){
        return getParameterByName("u");
    }
    return 0;
}
/*
export let getJwtToken = () => {
    return fetch("http://localhost:8793/api/token/" + getParameterByName("u"))
        .then(response => response.json(), error => console.log('An error occurred. getJwtToken', error))
        .then(json => {
            console.log("jwtToken suc"  + json);
            TokenHolder.setJwtToken(json);
            return json
        });
};*/

function getParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}