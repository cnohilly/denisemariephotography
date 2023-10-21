import { Fade, ImageListItem, ImageListItemBar } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AlbumCard = (props) => {
    const { title, description, photo } = props;
    const [hovered, setHovered] = useState(false);
    return (
        <ImageListItem
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                srcSet={`${photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${photo}?w=248&fit=crop&auto=format`}
                alt={title}
                loading="lazy"
            />
        </ImageListItem>)
}

export default AlbumCard;