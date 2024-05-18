import "./Home.css"
import MovieList from "../MovieList/MovieList"
import { useEffect, useState } from "react";

export default function Home(){

    const [trendingMovies, settrendingMovies] = useState([]);

    const sendReq = async () =>{
        const serverURL = `http://localhost:8080/trendingMovies`;
        const res = await fetch(serverURL);
        const data = await res.json();
        settrendingMovies(data);
    }

    useEffect(()=>{
        sendReq();
    },[])

    return(
        <>
        <MovieList trendData={trendingMovies} />
        </>
    )
}