import React from "react";
import DataInputForm from "./components/DataInputForm";
import ScoreTable from "./components/ScoreTable";
import Dashboard from "./components/Dashboard";
import Comparison from "./components/Comparison";
import ExportOptions from "./components/ExportOptions";

function App() {
    return (
        <div>
            <h1>Dynamic Scorecard Tool</h1>
            <DataInputForm />
            <ScoreTable />
            <Dashboard />
            <Comparison />
            <ExportOptions />
        </div>
    );
}

export default App;
