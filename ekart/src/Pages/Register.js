import { useState } from "react";
import { TextBox } from "../components/TextBox"
import { countryList } from "../config/constants";
import { Dropdown } from "../components/Dropdown";

export const Register = () => {
    //type
    //labels
    // id
    // name
    const [register,setRegister] = useState({});
  
    const handleChange =(e)=>{
        let latestInfo = register;
        latestInfo[e.target.name] =e.target.value;
        setRegister({...latestInfo});
    };

    const registerConfig = {
        Email: {
            label: "Email",
            id: "Email",
            name: "Email",
            type: "email",
            default:"test@gmail.com",
            onChange:handleChange
        },
        UserName: {
            label: "User Name",
            id: "UserName",
            name: "UserName",
            type: "text",
            default:"John",
            onChange:handleChange
        },
        Password: {
            label: "Password",
            id: "Password",
            name: "Password",
            type: "password",
            default:"Test@123",
            onChange:handleChange
        },
        Country:{
            label: "Country",
            id: "Country",
            name: "Country",
            list:countryList,
            onChange:handleChange,
            default:"USA"
        }
    }

    return (
        <div className="mt-5">
            <form>
                <TextBox config={registerConfig.Email} />
                <TextBox config={registerConfig.UserName} />
                <TextBox config={registerConfig.Password} />
                <Dropdown config={registerConfig.Country}/>
                <button type="submit" class="btn btn-primary">Sign in</button>
                {JSON.stringify(register)}
            </form>
        </div>
    )
}