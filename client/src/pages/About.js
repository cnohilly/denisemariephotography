import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import AlbumCard from '../components/AlbumCard';

import axios from "axios";

const About = (props) => {

    return (
        <Container className="m-5 about-container">
            <Row className="justify-content-center">
                <Col xs="auto">
                    <img src="/fox.jpg" alt="cute fox" className="about-img" />
                </Col>
                <Col xs="auto">
                    <div>
                        About Section
                    </div>
                </Col>
            </Row>
        </Container>
    )

}

export default About;