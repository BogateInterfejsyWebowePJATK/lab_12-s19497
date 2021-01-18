import {useState} from 'react';

function MyForm({setTableProps}) {
    const [inputText, setInputText] = useState('');
    const [inputText2, setInputText2] = useState('');
    const [select, setSelect] = useState('Red');
    const [radio, setRadio] = useState('Yes');
    const [checked, setChecked] = useState(false);

    function _onChange(setter) {
        return event => {
            let target = event.target;
            console.log(target, target.value);
            setter(target.type === 'checkbox' ? target.checked : target.value);
        }
    }

    return (
        <div className="MyForm">
            <h1>Yo!</h1>
            <label>
                Input 1
                <input type="text" value={inputText} onChange={_onChange(setInputText)}/>
            </label>
            <label>
                Input 2
                <input type="text" value={inputText2} onChange={_onChange(setInputText2)}/>
            </label>
            <div onChange={_onChange(setRadio)}>
                <label>
                    Yes
                    <input type="radio" name="answer" value="Yes" checked={radio === "Yes"}/>
                </label>
                <label>
                    No
                    <input type="radio" name="answer" value="No" checked={radio === "No"}/>
                </label>
            </div>
            <label>
                Select
                <select onChange={_onChange(setSelect)}>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Green</option>
                </select>
            </label>
            <label>
                Check me
                <input type="checkbox" onChange={_onChange(setChecked)}/>
            </label>
            <button onClick={() => setTableProps({
                radio, select, checked, inputText, inputText2
            })
            }>Submit
            </button>
            <button onClick={() => setTableProps({})}>Reset</button>
        </div>
    )
}

export default MyForm;