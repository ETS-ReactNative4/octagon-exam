let nodeType="dev";


export function serverUrl(){
   if(nodeType === 'dev'){
       return "http://localhost:8793";
   }
   return "http://mastermcq.com:8793";
}