import {useState} from 'react';

function avg(...args) {
    return args.map(i => Number(i)).reduce((i, j) => i + j) / args.length;
}

function MyForm() {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('0');
    return (
        <div className="MyForm">
            <h1>{outputText}</h1>
            <input type="text" value={inputText} onChange={(event => setInputText(event.target.value))}/>
            <button onClick={() => setOutputText(avg(...inputText.split(' ')))}>Average</button>
        </div>
    )
}

export default MyForm;