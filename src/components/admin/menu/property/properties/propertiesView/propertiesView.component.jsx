import { useEffect, useState } from "react";
import { GridComponent } from "../../../../../shared/grid.component";
import { getProperties } from "../../../../../../services/property/properties.service";

export function PropertiesView(){
    const [propertiesData,setPropertiesData]=useState();
    const headers=["PropertyType","PropertyName","PAddress","PDescription","Id"];
    useEffect(()=>{
        getPropertiesInfo()

    }, [])
    function getPropertiesInfo(){
        getProperties().then((res)=>{
            setPropertiesData(res.data)
        })
    }
    return(
        <div>
            <GridComponent header={headers} data={propertiesData}></GridComponent>
        </div>
    )
}