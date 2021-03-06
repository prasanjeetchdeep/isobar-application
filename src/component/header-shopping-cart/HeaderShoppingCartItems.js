import React from 'react';
import "./HeaderShoppingCartItems.modules.scss";
import { ListGroup } from "react-bootstrap";

const HeaderShoppingCartItems = ({ book: { image, title, name, author }, index }) => {
    return (
        <ListGroup.Item key={`shoppingcart-${index}`} >
            <div className="flexbox header-item-container">
                <img className="header-item-image" src={image} alt={title} />
                <div className="flexbox header-item-description">
                    <div className="flexbox header-item-name">{name}</div>
                    <div className="flexbox header-item-author">{author}</div>
                </div>
            </div>
        </ListGroup.Item>

    );
};

export default HeaderShoppingCartItems;

