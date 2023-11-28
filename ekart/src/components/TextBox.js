export const TextBox = (props) => {
    console.log(props);
    return (
        <div class="row mb-3">
            <label for={props.config.id}
                class="col-sm-2 col-form-label">{props.config.label}</label>
            <div class="col-sm-4">
                <input type={props.config.type}
                    name={props.config.name}
                    class="form-control"
                    id={props.config.id} />
            </div>
        </div>
    )
}