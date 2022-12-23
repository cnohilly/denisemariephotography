import React from 'react';
import { Card, Col } from 'react-bootstrap';

export default function AlbumCard(props) {
    const {
        photo_url,
        title,
        description
    } = props;

    return (
        <Col className="align-items-center d-flex">
            <Card className="bg-dark text-white album-card">
                <Card.Img className="card-img" src={photo_url} alt={title} />
                <Card.ImgOverlay className="card-overlay">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Test{description}</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Col>
    )
}
