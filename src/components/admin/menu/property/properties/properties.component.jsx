import { useForm } from "react-hook-form"
import { propertiesInfo } from "../../../../../services/property/properties.service"
import { PropertiesView } from "./propertiesView/propertiesView.component";

export function Properties(){

    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm()

    function propertiesDetails(data){
        propertiesInfo(data).then((res)=>{
            alert(JSON.stringify(res.data));

        })

    }
    return(
        <div>
            <form onSubmit={handleSubmit((data)=>{propertiesDetails(data)})}>
            <div>
                <label>PropertyType:</label>
                <input type="text" className="form-control" {...register("type",{required:true})}></input>
            </div>
            {errors.type &&<div className="text-danger">PropertyType is mandatary</div>}

            <div>
                <label>PropertyName:</label>
                <input type="text" className="form-control" {...register("name",{required:true})}></input>
            </div>
            {errors.name &&<div className="text-danger">Property Name is mandatary</div>}

            <div>
                <label>PropertyAddress:</label>
                <textarea row={3} className="form-control" {...register("address",{required:true})}>

                </textarea>
            </div>
            {errors.address &&<div className="text-danger">Property Address is mandatary</div>}

            <div>
                <label>PropertyDescription:</label>
                <textarea row={5} className="form-control" {...register("description",{required:true})}>

                </textarea>
            </div>
            {errors.description &&<div className="text-danger">Property Description is mandatary</div>}

            <div>
                <button className="btn btn-primary">Save</button>
                <button className="btn btn-danger">Cancel</button>
            </div>
            </form>
            
        </div>
    )
}