import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const FilmList = () =>{
    // console.log("Films Call----")

    const [filmList,setFilmlist] = useState([]);
    const [filterFilmList,setFilterFilmList] = useState([]);


    useEffect(()=> {
        if(filmList.length == 0){
            handlefilmFetch();
        }
    }, [filmList] );

    const handlefilmFetch = () => {
        fetch("https://ghibliapi.herokuapp.com/films", {mode: "cors"} )
            .then((response) => response.json())
            .then((result) => {setFilmlist(result);setFilterFilmList(result)}
        );

    };

    const handleSearchInput = (event) => {
        const mid = filmList.filter((item)=>{
            if(item.title.toLowerCase().includes(event.target.value.toLowerCase())){
                return true;
            }else{
                return false;
            }
        });
        setFilterFilmList(mid);

    };



    return(
        <main className="container my-3 welcomelanding">
            <h1 className="text-center p-2 border-bottom border-primary">
                Films
            </h1>
            <hr/>
            <div className="text-center">
                <span>Search:</span>
                <input type="text" placeholder="Type here to search!!" onChange={handleSearchInput}/>
            </div>
            <hr/>
            
            <div className="row">
                {filterFilmList.map((film)=>{
                    return (
                        <div key={film.id} className="card col-md-3">
                            <Link className="nav-link text-dark" to={`/films/${film.id}`}>
                                <div className="card-body">
                                    <h3>{film.title}</h3>
                                    <h5>{film.original_title}</h5>
                                    <p>Released in: {film.release_date}</p>
                                    <p>RT_score: {film.rt_score}</p>
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

export default FilmList;