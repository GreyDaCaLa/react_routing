import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LocationList = () =>{

    const [locationList,setLocationlist] = useState([]);
    const [filterLocationList,setFilterLocationList] = useState([]);


    useEffect(()=> {
        if(locationList.length == 0){
            handlelocationFetch();
        }
    }, [locationList] );

    const handlelocationFetch = () => {
        fetch("https://ghibliapi.herokuapp.com/locations", {mode: "cors"} )
            .then((response) => response.json())
            .then((result) => {setLocationlist(result);setFilterLocationList(result)}
        );

    };

    const handleSearchInput = (event) => {
        const mid = locationList.filter((item)=>{
            if(item.name.toLowerCase().includes(event.target.value.toLowerCase())){
                return true;
            }else{
                return false;
            }
        });
        setFilterLocationList(mid);

    };



    return(
        <main className="container my-3 welcomelanding">
            <h1 className="text-center p-2 border-bottom border-primary">
                Locations
            </h1>
            <hr/>
            <div className="text-center">
                <span>Search:</span>
                <input type="text" placeholder="Type here to search!!" onChange={handleSearchInput}/>
            </div>
            <hr/>
            
            <div className="row">
                {filterLocationList.map((location)=>{
                    return (
                        <div key={location.id} className="card col-md-3">
                            <Link className="nav-link text-dark" to={`/locations/${location.id}`}>
                                <div className="card-body">
                                    <h3>{location.name}</h3>
                                    <p>Climate: {location.climate}</p>
                                    <p>Terrain: {location.terrain}</p>
                                    <hr/>

                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </main>
    );

}

export default LocationList;