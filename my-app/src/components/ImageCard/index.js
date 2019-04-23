import React from "react";
import "./style.css"

function ImageCard(props) {
    return (
        <div className="image-card">
            <img alt= "" src={props.card} />
        </div>
    );
}

export default ImageCard;