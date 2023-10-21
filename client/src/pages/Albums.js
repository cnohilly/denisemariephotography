import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Box, Card, CardActionArea, CardContent, CardMedia, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { LoaderContext } from '../components/Loader/LoaderContext';

const Albums = (props) => {
    const { loaderOpen, setLoaderOpen } = useContext(LoaderContext);
    const [photosets, setPhotosets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPhotosets();
    }, []);

    const fetchPhotosets = () => {
        setLoaderOpen(true);
        axios.get('/api/photosets').then(res => {
            console.log(res.data);
            setPhotosets(res.data.photoset);
            setLoaderOpen(false);
        }).catch(err => {
            setLoaderOpen(false);
            console.log(err);
        })
    }

    const cardClickHandler = (id) => () => {
        navigate(`./${id}`, { replace: true })
    }

    return (
        <>
            <Box m={3}>
                <Box p={1}>
                    <Typography variant={'h3'}>{loaderOpen ? ' Retrieving albums.' : 'Photo Albums'}</Typography>
                </Box>
                <Grid container spacing={2} columns={{ xs: 2, sm: 4, md: 6, lg: 8, xl: 12 }} alignItems="baseline">
                    {photosets?.map((photoset) => (
                        <Grid item>
                            <Card>
                                <CardActionArea onClick={cardClickHandler(photoset.id)}               >
                                    <CardMedia
                                        component="img"
                                        image={photoset.primary_photo_extras.url_m}
                                        height={"300px"}
                                        alt={photoset.title._content}
                                    />
                                    <CardContent>
                                        <Typography variant='h5'>
                                            {photoset.title._content}
                                        </Typography>
                                        <Typography variant="body2" noWrap>
                                            {photoset.description._content}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            {/* <Container className="m-5 album-container">
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
            </Container> */}
        </>
    )

}

export default Albums;