import { useState, useEffect } from 'react'
import './css/Card.css'

function Card({checkedValue, searchLocation}){

    const [packages, setPackages] = useState([]);
    const [sortField, setSortField] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');

    useEffect (() =>{
        const fetchData = async () => {
            try{
                console.log("Fetching Starts");
                const response = await fetch('http://localhost:3000/api/activities');
                const data = await response.json();
                setPackages(data);
                console.log(data);
            }catch(err){
                console.log("Error loading package data:", err);
            }
            finally{
                console.log("Fetching Tried");
            }
        };
        fetchData();
    },[]);

    function handleSort(field){
        if(sortField == field){
            setSortDirection(sortDirection == 'asc' ? 'desc': 'asc');
        }
        else{
            setSortField(field);
            setSortDirection('asc');
        }
    }

    // const filteredPackages = checkedValue
    //     ? packages.filter(pkg => pkg.origin === checkedValue)
    //     : packages;

     const filteredPackages = packages.filter(pkg => {
        const matchesOrigin = checkedValue ? pkg.location === checkedValue : true;
        const matchesSearchLocation = searchLocation ? pkg.location.toLowerCase().includes(searchLocation.toLowerCase()) : true;
        return matchesOrigin && matchesSearchLocation;
    });

    console.log(filteredPackages);

    const sortedPackages = [...filteredPackages].sort((a, b) => {
        if (sortField === 'name') {
            const nameA = a.title.toUpperCase();
            const nameB = b.title.toUpperCase();
            if (nameA < nameB) return sortDirection === 'asc' ? -1 : 1;
            if (nameA > nameB) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        } else if (sortField === 'price') {
            const priceA = parseFloat(a.price.toString().replace(/[^0-9.]/g, ""));
            const priceB = parseFloat(b.price.toString().replace(/[^0-9.]/g, ""));
            return sortDirection === 'asc' ? priceA - priceB : priceB - priceA;
        }
        return 0;
    });

    const displayPackages = sortField === null ? filteredPackages : sortedPackages;

    return(
        <div className="right-searchresult">
            <div>
                <span className="sort-by-text">Sort By:</span>
                <button onClick={() => handleSort('name')} className="sort-btn">
                    Name {sortField === 'name' && (sortDirection === 'asc' ? '👆' : '👇')}
                </button>
                <button onClick={() => handleSort('price')} className="sort-btn">
                    Price {sortField === 'price' && (sortDirection === 'asc' ? '👆' : '👇')}
                </button>
            </div>


            {displayPackages.map((pkg) => (
            <div className="package-card" key={pkg.code}>
                {/* Left sarchpack */}
                <div className="card-image">
                    <img src={`/assets/packageImages/${pkg.image}`} alt={pkg.destination} />
                </div>
                {/* mid searchpack */}
                <div className="card-detials">
                    <div className="card-title">
                        <h3>{pkg.title}</h3>
                    </div>

                    <div className="card-info">
                        <p><b>Duration:</b> <span>{pkg.duration}</span></p>
                        <p><b>Activity Code:</b> <span>{pkg.code}</span></p>
                        <p><b>Location:</b> <span>{pkg.location}</span></p>
                        <p><b>Upcoming Date: <span>
                            {new Date(pkg.upcoming_date).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric'
                            })}
                            </span></b></p>
                    </div>

                   <div>
                        <p>{pkg.description.length > 100 ? pkg.description.slice(0, 100) + '...' : pkg.description}</p>
                    </div>


                    <div className="card-amentities">
                        <p><b>Inclusion:</b></p>
                        <img src="/assets/icon/car icon.png" alt="Car" className="icon-image"/>Car
                        <img src="/assets/icon/hotel.png" alt="Hotel" className="icon-image"/>Hotel
                        <img src="/assets/icon/meal.png" alt="Meal" className="icon-image"/>Meal
                    </div>

                </div>
                {/* right searchpack */}
                <div className="card-action">
                    <label>Starting From</label>
                    <strong> Rs. {pkg.price}</strong>
                    <a href="#">View Detials</a>
                    <button>Book Now</button>
                </div>
            </div>
            ))
            }
        </div>
    );
}

export default Card