import fetch from 'cross-fetch'
import * as ActionTypes from "../constants/ActionTypes";
import * as TokenHolder from "../utils/TokenHolder";

export let matchAnswer = (question, dispatch) => {
    return fetch("http://localhost:8793/api/question/" + question.id + "/answer/" + question.selectedOption,
        {
            headers: {
                "Authorization": "Bearer " + TokenHolder.getJwtToken(),
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Expose-Headers': 'Authorization'
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
                return json} );
};

function authError(){
    return { type: ActionTypes.AUTHENTICATION_ERROR}
}

export let getRandomQuestions = (limit) => {
        return fetch("http://localhost:8793/api/questions/" + limit + "/subject/1/etoken/?encryptedUserId=" + defaultValueUser(),
            {
                headers: {
                    "Authorization": "Bearer " + "11",
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Headers': '*'
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
                return json
            });
};

export function defaultValueUser() {
    if(getParameterByName("u") != null){
        return getParameterByName("u");
    }
    return 1;
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