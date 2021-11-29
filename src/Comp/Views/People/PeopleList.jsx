import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const PeopleList = () =>{
    // console.log("Peoples Call----")

    const [peopleList,setPeoplelist] = useState([]);
    const [filterPeopleList,setFilterPeopleList] = useState([]);


    useEffect(()=> {
        if(peopleList.length == 0){
            handlepeopleFetch();
        }
    }, [peopleList] );

    const handlepeopleFetch = () => {
        fetch("https://ghibliapi.herokuapp.com/people", {mode: "cors"} )
            .then((response) => response.json())
            .then((result) => {setPeoplelist(result);setFilterPeopleList(result)}
        );

    };

    const handleSearchInput = (event) => {
        const mid = peopleList.filter((item)=>{
            if(item.name.toLowerCase().includes(event.target.value.toLowerCase())){
                return true;
            }else{
                return false;
            }
        });
        setFilterPeopleList(mid);

    };



    return(
        <main className="container my-3 welcomelanding">
            <h1 className="text-center p-2 border-bottom border-primary">
                People
            </h1>
            <hr/>
            <div className="text-center">
                <span>Search:</span>
                <input type="text" placeholder="Type here to search!!" onChange={handleSearchInput}/>
            </div>
            <hr/>
            
            <div className="row">
                {filterPeopleList.map((people)=>{
                    return (
                        <div key={people.id} className="card col-md-3">
                            <Link className="nav-link text-dark" to={`/people/${people.id}`}>
                                <div className="card-body">
                                    <h3>{people.name}</h3>
                                    <p>Age: {people.age}</p>
                                    <p>Gender: {people.gender}</p>
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

export default PeopleList;