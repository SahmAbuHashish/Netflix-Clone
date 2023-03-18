import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ModalMovie from './ModalMovie';


export default function Movie(props) {

    const [showFlag, setShowFlag] = useState(false)
    const [clicked, setClicked] = useState({});

    const handleShow = (item) => {
        console.log(item)
        setShowFlag(true)
        setClicked(item)
    }

    const handelClose = () => {
        setShowFlag(false)
    }

    return (
        <>
            <Row xs={1} md={3} className="g-4">
                {props.movie.map((item) => {
                    return (<Col>
                        <Card style={{ width: '18rem' }} key={item.id}>
                            <Card.Img variant="top" src={item.poster_path} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <p>{item.release_date}</p>
                                    <p>{item.overview}</p>
                                    <p>{item.comment}</p>
                                </Card.Text>
                                <Button variant="primary" onClick={() => { handleShow(item) }}>Add to favorite</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                })};
            </Row>

            <ModalMovie showFlag={showFlag} handelClose={handelClose} movieModel={clicked} />
        </>
    )
}
