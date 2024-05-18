import "./ModalMovie.css"
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios"
import Form from 'react-bootstrap/Form';


export default function ModalMovie(props) {

    const [Post, setPost] = useState(false);

    async function addToFavorites(x) {
        x.preventDefault();
        setPost(true);
        const serverURL = `http://localhost:8080/getMovies`;
        const postUrl = `http://localhost:8080/addMovie`;
        const dataMovies = await axios.get(serverURL);
        let hasMovie = false;
        let titles = dataMovies.data.map(record => record.movie_title);
        titles.forEach(title => {
            if (title === props.movie.title) {
                hasMovie = true;
                console.log("Movie already exists in the database");
            }else{
                console.log("Movie does not exist in the database");
            }
        })
        if (!hasMovie) {
            const obj = {
                movie_title: props.movie.title,
                movie_release_date: props.movie.release_date,
                movie_poster_path: props.movie.poster_path,
                movie_overview: props.movie.overview,
                movie_comment: x.target.comment.value
            }
            console.log("obj : ", obj);
            axios.post(postUrl, obj)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            //const result = await axios.post(postUrl, obj);
            //console.log("result of adding movie : ", result);
        }
        props.handleClose();
        setPost(false);
    }


    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} key={props.movie.id}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={`https://image.tmdb.org/t/p/w185/${props.movie.poster_path}`} alt="Movie Poster" />
                    <br />
                    <Form onSubmit={addToFavorites}>
                        <Form.Group className="mb-3">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control name="comment" type="text" placeholder="Enter comment" />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={props.handleClose}>
                                Close
                            </Button>
                            {
                                !Post && <Button variant="primary" type="submit">
                                    Add To Favorite
                                </Button>
                            }
                            {
                                Post
                            }

                        </Modal.Footer>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    )
}