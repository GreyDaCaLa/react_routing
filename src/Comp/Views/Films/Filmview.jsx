import { useState,useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Filmview = () => {
    const [film, setFilm] = useState({});

    const history = useHistory();

    const {id} = useParams();

    useEffect(()=> {
        if(film.title === undefined){
            fetchFilm();
        }
    }, [film]);

    const fetchFilm = () => {
        // console.log("fetching...")
        let url=`https://ghibliapi.herokuapp.com/films/${id}`
        fetch(url,{mode:'cors',})
        .then((response)=> response.json())
        .then((result)=>{ setFilm(result) })
        .catch((error) => console.log("fetchCharacter--Catch:",error));
    }

    return(
        <main className="container my-3 welcomelanding text-center">
            <button className="btn btn-info" onClick={history.goBack}>Back</button>
                <h1 className="text-center p-2 border-bottom border-primary">
                    Film: {film.title}
                </h1>
            <div className="text-center">
                <h4>{film.original_title}</h4>
                <h5>{film.original_title_romanised}</h5>
            </div>
            <hr/>
            <div>
                <p>Released in: {film.release_date}</p>
                <p>RT_score: {film.rt_score}</p>
                <hr/>
                <h6 className="text-center">Description</h6>
                <p>{film.description}</p>
            </div>
        </main>
    )

}










export default Filmview;



