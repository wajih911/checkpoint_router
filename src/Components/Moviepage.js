import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Moviepage.css";

function Moviepage(props) {
  console.log(props);
  const movie = props.location.state.movie;

  console.log(movie);

  return (
    <div className=" MovieCard">
      <Card className="movieCard">
        <Card.Img variant="top" src={movie.posterUrl} className="MovieImg" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <h5>{"⭐".repeat(movie.rate)}</h5>
          <iframe
            width="200"
            height="150"
            src={movie.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Card.Body>
        <Card.Footer>
          <Link to="/">
            <Button variant="primary">Go Back</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Moviepage;
