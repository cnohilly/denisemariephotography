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
            <ImageList variant="masonry" cols={5} gap={10}>
                {photoset?.photo?.map((photo) => (
                    <AlbumCard
                        key={photoset.id}
                        photo={photo.url_m}
                    />
                ))}
            </ImageList>
        </Box>
    )
}

export default Album;