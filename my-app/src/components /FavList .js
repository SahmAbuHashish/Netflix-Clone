import { useEffect, useState } from "react";
import React from 'react'
import NavigBar from './NavigBar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function FavList(props) {

    const [favoriteArr, setFavoriteArr] = useState()
    // const [addFavor, setAddFavor] = useState()

    const sendReq = async ()=>{
        const Url = `https://movies-library-production.up.railway.app/addMovie`
        const response = await fetch(Url)
        const data = await response.json()
        setFavoriteArr(data)
        console.log(data)
    }

    useEffect(()=>{
        sendReq();
    }, [])

    return (<>
        <NavigBar />

        <Row xs={1} md={3} className="g-4">
            {props.favoriteArr.map((item) => {
                return (<Col>
                    <Card style={{ width: '18rem' }} key={item.id}>
                        <Card.Img variant="top" src={item.poster_path} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                <p>{item.release_date}</p>
                                <p>{item.overview}</p>
                            </Card.Text>
                            <Button variant="primary">Delete</Button>
                        </Card.Body>
                    </Card>
                </Col>
                )
            })};
            </Row>
        </>
    )
}
