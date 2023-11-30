import { getData, saveData } from "./context.service";

const url=" http://localhost:3000/agent/"

export function saveAgentInfo(data){
    return saveData(url,data)
}

export function getAgentInf(){
    return getData(url)
}