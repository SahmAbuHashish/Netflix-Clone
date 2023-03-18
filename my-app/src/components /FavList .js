import { useEffect, useState } from "react";
import React from 'react'
import NavigBar from './NavigBar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UpdateFivModel from "./UpdateFivModel";
// import axios from 'axios';


export default function FavList() {

    const [favoriteArr, setFavoriteArr] = useState([])
    const [newArray, setNewArray] = useState([])

    const [showFlag, setShowFlag] = useState(false)
    const [clicked, setClicked] = useState({});

    const handleShow = (item) =>{
        console.log(item)
        setShowFlag(true)
        setClicked(item)
    }

    const handelClose = () =>{
        setShowFlag(false)
    }

    const handleDelete = async ()=>{
        // const Url = `${process.env.REACT_APP_serverURL}/DELETE/${favoriteArr.id}`
        // const axiosRes = await axios.delete(Url);
        // console.log(axiosRes.data);

        // fetch(Url, { method: 'DELETE' })
        // .then(() => this.setState({ status: 'Delete successful' }));

        // console.log("Deleted !");
        // console.log(newArray.id);
    }

    const sendReq = async () => {
        const Url = `${process.env.REACT_APP_serverURL}/getMovies`
        const response = await fetch(Url)
        const data = await response.json()
        console.log(data)
        setFavoriteArr(data)
    }

    const getingUpdatedData = (newArray)=>{
        console.log(newArray);
        setNewArray(newArray)
    }

    useEffect(() => {
        sendReq();
    }, [])

    useEffect(() => {
        setNewArray(favoriteArr)
    },[favoriteArr])

    useEffect(() => {
        handleDelete();
    })

    return (
        <>
            <NavigBar />

            <Row xs={1} md={3} className="g-4">

                {newArray.map((item) => {
                return (<Col>
                    <Card style={{ width: '18rem' }} key={item.id}>
                        <Card.Img variant="top" src={item.poster_path} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                <p>{item.release_date}</p>
                                <p>{item.comment}</p>
                            </Card.Text>
                            {/* <Button variant="primary" onClick={()=>{handleShow(item)}} >save</Button> */}
                            <Button variant="success" onClick={()=>{handleShow(item)}}>Update comment</Button>
                            <Button variant="danger" onClick={()=>{handleDelete(item.id)}}>Delete</Button>
                        </Card.Body>
                    </Card>
                </Col>
                )
            })};
            </Row>

            <UpdateFivModel showFlag={showFlag} handelClose={handelClose} movieModel={clicked} getingUpdatedData={getingUpdatedData} handleShow={handleShow}/>
        </>
    )
}
