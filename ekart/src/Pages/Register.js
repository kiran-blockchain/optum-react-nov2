import { useState } from "react";
import { TextBox } from "../components/TextBox"

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
            onChange:handleChange
        },
        UserName: {
            label: "User Name",
            id: "UserName",
            name: "UserName",
            type: "text",
            onChange:handleChange
        },
        Password: {
            label: "Password",
            id: "Password",
            name: "Password",
            type: "password",
            onChange:handleChange
        },
    }

    return (
        <div className="mt-5">
            <form>
                <TextBox config={registerConfig.Email} />
                <TextBox config={registerConfig.UserName} />
                <TextBox config={registerConfig.Password} />
                <button type="submit" class="btn btn-primary">Sign in</button>
                {JSON.stringify(register)}
            </form>
        </div>
    )
}