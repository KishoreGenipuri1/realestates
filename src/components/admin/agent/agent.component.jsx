import { useForm } from "react-hook-form"
import { saveAgentInfo } from "../../../services/agent.service";

export function AgentInformation(){
    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();

    function agentForm(data){
        saveAgentInfo(data).then((res)=>{
            alert(res.data)
        })

    }

    return(
        <div>
            <form onSubmit={handleSubmit((data)=>{agentForm(data)})}>
            <div>
            <label>AgentName:</label>
            <input type="text"placeholder="Enter agent name here!..."{...register("name",{required:true})} className="form-control"></input>
            </div>
            {errors.name &&<div className="text-danger">Agent name is mandatary</div>}

            <div>
                <label>AgentEmail:</label>
                <input type="email"  placeholder="Enter Agent Email here!..."{...register("email",{required:true})} className="form-control"></input>
            </div>
            {errors.email &&<div className="text-danger">Agent email is mandatary</div>}

            <div>
                <label>AgentPhoneNumber:</label>
                <input type="number" className="form-control" placeholder="Enter Agent PhoneNumber here!..."{...register("number",{required:true})}></input>
            </div>
            {errors.number && <div className="text-danger">AgentNumber is mandatary</div>}

            <div>
                <label>AgentAddress:</label>
                <textarea row={5} className="form-control" {...register("address",{required:true})}>

                </textarea>
            </div>
            {errors.address &&<div className="text-danger">Agent Address is mandatary</div>}


            <div>
                <label>Password:</label>
                <input type="password" placeholder="Enter Agent password here!..." {...register("password",{required:true})} className="form-control"></input>
            </div>
            {errors.password &&<div className="text-danger">Agent password is mandatary</div>}

            <div>
                <label>Confirmpassword:</label>
                <input type="cfpassword" placeholder="Enter Agent Cfp here!..." {...register("cfp",{required:true})} className="form-control"></input>
            </div>
            {errors.cfp &&<div className="text-danger">Agent Cpf is mandatary</div>}


           

            <div>
                <button className="btn btn-primary">Save</button>
                <button className="btn btn-danger">Cancel</button>
            </div>
            </form>

        </div>
    )
}