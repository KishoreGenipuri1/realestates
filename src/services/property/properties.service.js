import { getData, saveData } from "../context.service";
const url=" http://localhost:3000/properties/";

export function propertiesInfo(data){
    return saveData(url,data)
}

export function getProperties(){
    return getData(url)
}