import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';


export default function ModalMovie(props) {

        const [clicked, setClicked] = useState({});

    const addToFav = (props) =>{
        setClicked(props)
    }

    return (
        <>
            <Modal show={props.showFlag} onHide={props.handelClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movieModel.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.movieModel.poster_path} width='100%'></Image>
                    <p>{props.movieModel.release_date}</p>
                    <p>{props.movieModel.overview}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handelClose}>
                        Close
                    </Button>
                    <Button variant="primary"  onClick={()=>{addToFav(props)}}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
