import { TextBox } from "../components/TextBox"

export const Register = () => {
    //type
    //labels
    // id
    // name
    const registerConfig = {
        Email: {
            label: "Email",
            id: "Email",
            name: "Email",
            type: "email"
        },
        UserName: {
            label: "User Name",
            id: "UserName",
            name: "UserName",
            type: "text"
        },
        Password: {
            label: "Password",
            id: "Password",
            name: "Password",
            type: "password"
        },
    }

    return (
        <div className="mt-5">
            <form>
                <TextBox config={registerConfig.Email} />
                <TextBox config={registerConfig.UserName} />
                <TextBox config={registerConfig.Password} />
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
    )
}