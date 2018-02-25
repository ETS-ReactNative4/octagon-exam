let jwtToken= "";

export function setJwtToken(token){
    jwtToken = token;
}

export function getJwtToken(){
    return jwtToken;
}