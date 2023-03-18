import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';



export default function ModalMovie(props) {

    const [clicked, setClicked] = useState({});

//  ------------------------------------------------------------------------
    // const [postId, setPostId] = useState(null);

    // useEffect(() => {
    //     // PUT request using fetch with async/await
    //     const addToFav =  async function () {
    //         const Url = `https://movies-library-production.up.railway.app/addMovie`

    //         const requestOptions = {
    //             method: 'PUT',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ comment: props.comment })
    //         };
    //         const response = await fetch(Url, requestOptions);
    //         const data = await response.json();
    //         setClicked(data.id);
    //     }

    //     addToFav();
    // }, []);
    //---------------------------------------------------------------------
    

    const sendReq = async () => {
        const Url = `${process.env.REACT_APP_serverURL}/addMovie`
        const response = await fetch(Url)
        const data = await response.json()
        setClicked(data)
        console.log(data)
    }


    const addToFav = (props) => {
        setClicked(props)
    }

    useEffect(() => {
        sendReq();
    }, [])

    const updateComment = (e) => {
        console.log("hi");
        e.preventDefault();
        console.log(e);

        const obj = {
            comment: e.target.comment.value
        }
        console.log(obj);

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

                    <Form onSubmit={updateComment}>
                        <label>
                            Add comment:
                            <textarea class="form-control" id="message-text" name='comment' defaultValue={props.movieModel.comment}/>
                        </label>
                        <input class="form-control" id="message-text" type="submit" value="Submit"/>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handelClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { addToFav(clicked) }} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
