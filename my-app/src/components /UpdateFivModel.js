import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


export default function UpdateFivModel(props) {

    const updateComment = async (e) => {
        
        console.log("hi");
        e.preventDefault();
        console.log(e);

        const obj = {
            title : props.movieModel.title,
            release_date : props.movieModel.release_date,
            poster_path : props.movieModel.poster_path,
            comment : e.target.comment.value
        }
        console.log(obj);
        console.log(props.movieModel.id);

        const Url = `${process.env.REACT_APP_serverURL}/UPDATE/${props.movieModel.id}`
        const axiosRes = await axios.put(Url, obj);
        console.log(axiosRes.data);
        
        props.getingUpdatedData(axiosRes.data);
        props.handelClose()
        props.setShowFlag(true);
    }


    return (
        <>
            <Modal show={props.showFlag} onHide={props.handelClose} onSubmit={updateComment}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movieModel.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.movieModel.poster_path} width='100%'></Image>
                    <p>{props.movieModel.release_date}</p>
                    <p>{props.movieModel.overview}</p>

                    <Form >
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
                </Modal.Footer>
            </Modal>
        </>
    )
}
