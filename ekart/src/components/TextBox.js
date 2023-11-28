import { useState } from "react";

export const TextBox = (props) => {

    // creating the state
    const [textBoxValue,setValue] = useState(props.config.default);
   // console.log(props);
    return (
        <div class="row mb-3">
            <label for={props.config.id}
                class="col-sm-2 col-form-label">{props.config.label}</label>
            <div class="col-sm-4">
                <input type={props.config.type}
                    name={props.config.name}
                    class="form-control"
                    id={props.config.id}
                    value={textBoxValue}            
                    onChange={e=>{
                        
                        setValue(e.target.value)
                        props.config.onChange(e);
                    }} />
                    
            </div>
        </div>
    )
}