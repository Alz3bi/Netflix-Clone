import "./Movie.css"
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import ModalMovie from "../ModalMovie/ModalMovie";

export default function Movie(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => console.log("Renderd", show), [])
    return (
        <>
            <Col key={props.data.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300/${props.data.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{props.data.title}</Card.Title>
                        <Card.Text>
                            {props.data.release_date}
                        </Card.Text>
                        <Card.Text>
                            {props.data.overview}
                        </Card.Text>
                        <Button variant="primary" onClick={handleShow}>
                            Add To Favorite
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
            <ModalMovie show={show} handleClose={handleClose} movie={props.data}/>
        </>
    )
}