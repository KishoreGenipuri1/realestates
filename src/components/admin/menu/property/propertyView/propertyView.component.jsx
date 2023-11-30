import { useEffect, useState } from "react"
import { getPropertyInfo } from "../../../../../services/property/property.service"
import { GridComponent } from "../../../../shared/grid.component";

export function PropertyTypeView(){

    const [propertyInfo,setPropertyInfo]=useState();

    const headers=["PropertyName","PropertyDescription","Id"]

    useEffect(()=>{
        getProperty();

    },[])
    function getProperty(){
        getPropertyInfo().then((res)=>{
            setPropertyInfo(res.data)
        })

    }
    return(
        // <div>
            <GridComponent header={headers} data={propertyInfo}></GridComponent>


        // </div>
    )
}