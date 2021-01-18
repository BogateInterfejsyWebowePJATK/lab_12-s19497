import {useState} from 'react';
import MyInput from "./MyInput";

function useInput(initialState) {
    const [value, setValue] = useState(initialState);
    return [value, setValue, {
        value, onChange: (event) => setValue(event.target.value)
    }]
}

function MyForm() {
    const [email, setEmail, emailInputProps] = useInput('');
    const [emailInvalid, setEmailInvalid] = useState(false);
    const emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    const [password, setPassword, passwordInputProps] = useInput('');
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);

    function handleSubmit(event) {
        event.preventDefault();
        setEmailInvalid(!emailRegex.test(email));
        setPasswordInvalid(!passwordRegex.test(password));

        if (!(emailInvalid || passwordInvalid)) {
            alert([email, password]);
        }
    }

    return (
        <div className="MyForm">
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <MyInput regex={emailRegex} inputProps={emailInputProps}
                         msg="Email invalid" type="email" invalid={emailInvalid}
                />

                <MyInput type="password" regex={passwordRegex} inputProps={passwordInputProps}
                         msg="Password invalid" invalid={passwordInvalid}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MyForm;