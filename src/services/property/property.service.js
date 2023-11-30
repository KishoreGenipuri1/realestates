import { getData, saveData } from "../context.service";

const url="http://localhost:3000/propert/"

export function savePropertyDetails(data){
    return saveData(url,data)
}

export function getPropertyInfo(){
    return getData(url)
}