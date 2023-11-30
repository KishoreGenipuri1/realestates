import { useForm } from "react-hook-form"
import { savePropertyDetails } from "../../../../../services/property/property.service";
import { PropertyTypeView } from "../propertyView/propertyView.component";
// import { GridComponent } from "../../../../shared/grid.component";

export function PropertyType(){
    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();

    function savePropertyDetais(data){
       savePropertyDetails(data).then((res)=>{
        alert(JSON.stringify(res.data))
       })
    }

    return(
        <div>
            <form onSubmit={handleSubmit((data)=>{savePropertyDetais(data)})}>
            <div>
            <label>Property Type:</label>
            <input type="text" className="form-control" {...register("name",{required:true})}></input>
            </div>
            {errors.name &&<div className="text-danger">Property mandatary</div>}

            <div>
                <label>Description:</label>
                <input type="text" className="form-control" {...register("type",{required:true})}></input>
            </div>
            {errors.type &&<div className="text-danger">Description type is mandatary</div>}

            <div>
                <button className="btn btn-primary">Save</button>
                <button className="btn btn-danger">Cancel</button>
            </div>
            
            </form>
         {/* <GetPropertyInfo></GetPropertyInfo> */}
         {/* <GridComponent></GridComponent> */}
       

        </div>
    )
}