import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import AlbumCard from '../components/AlbumCard';

import axios from "axios";

const Albums = (props) => {

    const [photosets, setPhotosets] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetchPhotosets();
    }, []);

    const fetchPhotosets = () => {
        axios.get('/api/photosets').then(res => {
            console.log(res.data);
            setPhotosets(res.data.photoset);
            setLoading(false);

        })
            .catch(err => {
                console.log(err);
            })
    }

    if (isLoading) {
        return (
            <div>
                Retrieving albums.
            </div>
        )
    }

    return (
        <Container className="m-5 album-container">
            <Row xs={1} md={2} lg={3}>
                {photosets.map((photoset) => (
                    <Col className="align-items-center d-flex" key={photoset.id}>
                        <a href={'albums/' + photoset.id}>
                            <Card className="bg-dark text-white album-card">
                                <Card.Img className="card-img" src={photoset.primary_photo_extras.url_m} alt={photoset.title._content} />
                                <Card.ImgOverlay className="card-overlay">
                                    <Card.Title>{photoset.title._content}</Card.Title>
                                    <Card.Text>{photoset.description._content}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container>
    )

}

export default Albums;