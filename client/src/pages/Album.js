import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AlbumCard from '../components/AlbumCard';

import axios from "axios";

const Album = (props) => {

    const { id: photosetId } = useParams();

    const [photoset, setPhotoset] = useState();
    const [isLoading, setLoading] = useState(true);

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [modalInfo, setModalInfo] = useState({
        img: "",
        title: ""
    });

    useEffect(() => {
        fetchPhotos();
    }, []);

    const fetchPhotos = () => {
        axios.get('/api/photoset', {
            params: {
                photoset_id: photosetId
            }
        }).then(res => {
            setPhotoset(res.data.photoset);
            setLoading(false);
        }).catch(err => {
            console.log(err);
        })
    }

    const displayModal = (event) => {
        console.log(event.target.getAttribute('src'));
        setModalInfo({
            img: event.target.getAttribute('src'),
            title: event.target.getAttribute('alt')
        });
        setShow(true);
    }

    if (isLoading) {
        return (
            <div>
                Retrieving albums.
            </div>
        )
    }

    return (
        <>
            <Container className="m-5 mx-auto">
                <Row xs={2} md={4} lg={6} className="w-100 gy-5 gx-3">
                    {photoset.photo.map((photo) => (
                        <Col className="d-flex align-items-center" key={photo.id}>
                            {/* <img className="w-100 album-photo" src={photo.url_m} data-attr-url_o={photo.url_o} alt={photo.title} onClick={displayModal} /> */}
                            <div className="img-card d-flex justify-content-center" >
                                <img onClick={displayModal} className="absolute h-100" src={photo.url_m} alt={photo.title} />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container >
            <Modal fullscreen="sm-down" size="xl" centered show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton className="bg-dark text-white border-secondary">
                    <Modal.Title id="img-modal" className="modal-title">{modalInfo.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark mx-0 my-0 d-flex align-items-center justify-content-center m-2 border-dark img-body">
                    <img src={modalInfo.img} alt={modalInfo.title} className="p-3 album-photo" />
                </Modal.Body>
            </Modal>
        </>
    )

}

export default Album;