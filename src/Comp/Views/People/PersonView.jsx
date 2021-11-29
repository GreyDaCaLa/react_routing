import { useState,useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Personview = () => {
    const [person, setPerson] = useState({});

    const history = useHistory();

    const {id} = useParams();

    useEffect(()=> {
        if(person.name === undefined){
            fetchPerson();
        }
    }, [person]);

    const fetchPerson = () => {
        // console.log("fetching...")
        let url=`https://ghibliapi.herokuapp.com/people/${id}`
        fetch(url,{mode:'cors',})
        .then((response)=> response.json())
        .then((result)=>{ setPerson(result) })
        .catch((error) => console.log("fetchCharacter--Catch:",error));
    }

    return(
        <main className="container my-3 welcomelanding text-center">
            <button className="btn btn-info" onClick={history.goBack}>Back</button>
                <h1 className="text-center p-2 border-bottom border-primary">
                    Person: {person.name}
                </h1>
            <hr/>
            <div>
                <p>Age: {person.age}</p>
                <p>Gender: {person.gender}</p>
                <hr/>
            </div>
        </main>
    )

}










export default Personview;



