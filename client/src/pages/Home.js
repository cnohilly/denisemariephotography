import React, { useState, useEffect } from 'react';
import { Container, Card, Row } from 'react-bootstrap';
import AlbumCard from '../components/AlbumCard';

import axios from "axios";

const Home = (props) => {

    // const [photosets, setPhotosets] = useState([]);
    // const [isLoading, setLoading] = useState(true);

    // useEffect(() => {
    //     testFetch();
    // },);

    // const testFetch = () => {
    //     axios.get('/api/photosets').then(res => {
    //         setPhotosets(res.data.photoset);
    //         setLoading(false);

    //     })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    // if (isLoading) {
    //     return (
    //         <div>
    //             Retrieving albums.
    //         </div>
    //     )
    // }

    return (
        <Container className="m-5 album-container">
            <div>
                Homepage
            </div>
        </Container>
    )

}

export default Home;