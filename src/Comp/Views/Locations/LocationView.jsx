import { useState,useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Locationview = () => {
    const [location, setLocation] = useState({});

    const history = useHistory();

    const {id} = useParams();

    useEffect(()=> {
        if(location.name === undefined){
            fetchLocation();
        }
    }, [location]);

    const fetchLocation = () => {
        // console.log("fetching...")
        let url=`https://ghibliapi.herokuapp.com/locations/${id}`
        fetch(url,{mode:'cors',})
        .then((response)=> response.json())
        .then((result)=>{ setLocation(result) })
        .catch((error) => console.log("fetchCharacter--Catch:",error));
    }

    return(
        <main className="container my-3 welcomelanding text-center">
            <button className="btn btn-info" onClick={history.goBack}>Back</button>
                <h1 className="text-center p-2 border-bottom border-primary">
                    Location: {location.name}
                </h1>
            <hr/>
            <div>
                <p>Climate: {location.climate}</p>
                <p>Terrain: {location.terrain}</p>
                <p>Surface Water: {location.surface_water}</p>
                
            </div>
        </main>
    )

}










export default Locationview;



