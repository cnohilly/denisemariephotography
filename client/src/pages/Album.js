import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AlbumCard from '../components/AlbumCard';

import axios from "axios";
import { Box, ImageList } from '@mui/material';
import { LoaderContext } from '../components/Loader/LoaderContext';

const Album = (props) => {
    const { loaderOpen, setLoaderOpen } = useContext(LoaderContext);
    const { id: photosetId } = useParams();

    const [photoset, setPhotoset] = useState();

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [modalInfo, setModalInfo] = useState({
        img: "",
        title: ""
    });

    const fetchPhotos = () => {
        setLoaderOpen(true);
        axios.get('/api/photoset', {
            params: {
                photoset_id: photosetId
            }
        }).then(res => {
            setPhotoset(res.data.photoset);
            setLoaderOpen(false);
        }).catch(err => {
            setLoaderOpen(false);
            console.log(err);
        })
    }
    useEffect(() => {
        fetchPhotos();
    }, []);


    const displayModal = (event) => {
        console.log(event.target.getAttribute('src'));
        setModalInfo({
            img: event.target.getAttribute('src'),
            title: event.target.getAttribute('alt')
        });
        setShow(true);
    }

    if (loaderOpen) {
        return (
            <div>
                Retrieving albums.
            </div>
        )
    }

    return (
        <Box p={2} sx={{ backgroundColor: 'darkGray' }}>
            <ImageList variant="masonry" cols={4} gap={10}>
                {photoset?.photo?.map((photo) => (
                    <AlbumCard
                        key={photoset.id}
                        photo={photo.url_m}
                    />
                ))}
            </ImageList>
        </Box>
    )

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