import axios from "axios";

export function saveData(url,data){
    return axios.post(url,data)
}

export function getData(url){
    return axios.get(url)
}

export function updateData(url,data){
    return axios.put(url,data)
}

export function deleteData(){
    return axios.delete()
}