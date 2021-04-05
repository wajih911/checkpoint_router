import React from "react";
import MovieCard from "./MovieCard";
import "./Movielist.css";

function MovieList({ films, searchTitle, searchRate }) {
    return (
        <div className="hmed">
            {/* {console.log(films)} */}
            {films
                .filter(
                    (movie) =>
                        movie.rate >= searchRate &&
                        movie.title
                            .toLowerCase()
                            .includes(searchTitle.toLowerCase())
                )
                .map((e, i) => (
                    <MovieCard movie={e} key={i} />
                ))}

            {/* {props.films.map((e, i) => (
                <MovieCard movie={e} key={i} />
            ))} */}
        </div>
    );
}

export default MovieList;
