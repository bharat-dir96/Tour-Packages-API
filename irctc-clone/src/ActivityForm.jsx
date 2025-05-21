import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './css/ActivityForm.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';

function ActivityForm({onSearch}) {

    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [guests, setGuests] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Search:', { location, date: startDate.toDateString(), guests });
        onSearch(location);
    }

    return(
        <form className="search-bar" onSubmit={handleSubmit}>
            <div className="form-fields">

                <div className="search-item">
                    <FaMapMarkerAlt className="icon"/>
                    <input 
                        type="text" 
                        placeholder="I want to go to" 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>

                <div className="divider" />

                <div className="search-item">
                    <FaCalendarAlt className="icon"/>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd-MMM-yyyy"
                        className="datepicker-input"
                    />
                </div>

                <div className="divider" />

                <div className="search-item">
                    <FaUser className="icon"/>
                    <input 
                        type="number" 
                        placeholder="Select no of guests" 
                        value={guests} 
                        onChange={(e) => setGuests(e.target.value)}
                    />
                </div>

                <button type="submit" className="search-button">Search</button>

            </div>


        </form>
    );
}

export default ActivityForm