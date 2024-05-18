import "./MovieList.css"
import Row from 'react-bootstrap/Row';
import Movie from "../Movie/Movie"

export default function MovieList(props){
    return(
        <>
        <Row xs={1} md={4} className="g-4">
                {props.trendData.map((item) => {
                    return (
                        <>
                        <Movie data={item} />
                        </>
                    )
                })}
            </Row>
        </>
    )
}