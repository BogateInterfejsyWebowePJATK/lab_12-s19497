function MyInput({type, inputProps, msg, invalid}) {
    return (
        <div>
            <label>
                <input type={type} {...inputProps}/>
                {invalid ? msg : null}
            </label>
        </div>
    );
}

export default MyInput;