import React from 'react'
import { useEffect, useState } from 'react'
import MovieList from './MovieList';
import NavigBar from './NavigBar';



export default function Home() {
    
    const [movieArr, setMovieArr] = useState([])

    const sendReq = async () => {
        const Url = `https://movies-library-production.up.railway.app/trending`
        const response = await fetch(Url)
        const data = await response.json();
        setMovieArr(data)
        console.log(data)
    }

    useEffect(() => {
        sendReq();
    }, [])

    return (
        <>
            <NavigBar />
            <MovieList movieArr={movieArr}/>
        </>
    )
}
