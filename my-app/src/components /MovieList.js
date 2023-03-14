import React from 'react'
import Movie from './Movie';

export default function MovieList(props) {
    return (
    <>
        <Movie movie={props.movieArr}/>
    </>
    )
}
