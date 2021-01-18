import './App.css';
import MyForm from "./components/MyForm";
import Table from "./components/Table";
import {useState} from "react";

function App() {
    const [tableProps, setTableProps] = useState({});
    return (
        <div className="App">
            <MyForm setTableProps={setTableProps}/>
            <Table {...tableProps}/>
        </div>
    );
}

export default App;
