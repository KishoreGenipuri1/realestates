export function GridComponent(props){
    return(
       <table className="table table-bordered table-hover">
        <thead className="table-primary">
            <tr>
                {
                    props  && props.header && props.header.map ((item)=>{
                        return(
                            <th>{item}</th>
                        )
                    })
                }
            </tr>

        </thead>
        <tbody>
            {
                props && props.data && props.data.map((p)=>{
                    return(
                        <tr>
                            {
                                Object.values(p).map((d)=>{
                                    return(
                                        <td>{d}</td>
                                    )
                                })
                            }
                        </tr>

                    )

                })
            }
        </tbody>

       </table>
    )
}