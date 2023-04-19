export function InputBox({BoxName, name, props}){
    return(
        <div className="row mb-3">
            <label className="col-sm-4 col-form-label">{BoxName}</label>
            <div className="col-sm-8">
                <input className="form-control"
                    name={name}
                    defaultValue={props}
                    class="inputbox"
                />
            </div>
        </div>
    )
}