import React from 'react';

function LikeButton(props) {
    let  buttonType = "fa fa-heart";
    if(!props.liked) 
        buttonType = "fa fa-camera"
    return (<i className={buttonType} aria-hidden="true" onClick={props.onClick} style={{cursor :"pointer"}}></i>);
}

export default LikeButton;