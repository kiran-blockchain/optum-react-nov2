import { useState } from "react";


export const Dropdown = (props) => {
    
    const config =props.config;
    const[value,setValue]=useState(config.default);
    const buildOptions = () => {
        return config.list.map((item, index) => {
            return <option key={item.value} value={item.value}>{item.name}</option>
        })
    }
    return (
        <div class="row mb-3">
            <label for={config.id}
                class="col-sm-2 col-form-label">{config.label}</label>
            <div class="col-sm-4">
                <select
                    className="form-control"
                    id={config.id}
                    name={config.name}
                    onChange={e=>{
                        setValue(e.target.value);
                        config.onChange(e);
                    }}
                    value ={value}
                >
                    <option value="">Please Select</option>
                    {buildOptions()}
                </select>
            </div>
        </div>
    )
}