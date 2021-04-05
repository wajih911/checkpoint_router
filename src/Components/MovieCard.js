import React from "react";
import { Card, Button } from "react-bootstrap";
import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className=" MovieCard">
      <Card className="movieCard">
        <Card.Img
          style={{ height: "350px" }}
          variant="top"
          src={movie.posterUrl}
          className="MovieImg"
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <h5>{"⭐".repeat(movie.rate)}</h5>
        </Card.Body>
        <Card.Footer>
          <Link
            to={{
              pathname: `/movie/${movie.id}`,
              state: {
                movie,
              },
            }}
          >
            <Button variant="primary">Go to see</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default MovieCard;
