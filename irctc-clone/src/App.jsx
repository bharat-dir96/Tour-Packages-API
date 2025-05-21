import { useState } from 'react';
import './App.css'
import Navbar from './Navbar.jsx'
import Card from './Card.jsx'
import Sidebar from './Sidebar.jsx'
import ActivityForm from './ActivityForm.jsx';

function App() {

    const [checkedValue, setCheckedValue] = useState("");
    const [searchLocation, setSearchLocation] = useState(""); 

    return (
        <>
        <Navbar />
        <div className="activity-form-wrapper">
            <ActivityForm onSearch={setSearchLocation}/>
        </div>
        <div className="main-container">
            <Sidebar oncheckboxchange={setCheckedValue}/>
            <Card checkedValue={checkedValue} searchLocation={searchLocation}/>
        </div>
        </>
    )
}

export default App
