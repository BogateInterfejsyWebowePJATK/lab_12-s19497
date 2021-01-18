import './App.css';
import MyForm from "./components/MyForm";
import {useState} from "react";

function App() {
    const [tableProps, setTableProps] = useState({});
    return (
        <div className="App">
            <MyForm setTableProps={setTableProps}/>
        </div>
    );
}

export default App;
