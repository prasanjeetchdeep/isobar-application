import React, {useState} from "react";
import { Col, Card } from "react-bootstrap";
import "./BookCardComponent.modules.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTimesCircle, faClock, faCalendar } from '@fortawesome/free-solid-svg-icons'

const BookCardComponent = ({ image, title, description, author, duration, publishDate}) => {
  const [showButton, setShowButton] = useState(false);
  const [showAddButton, setShowAddButton] = useState(true);
  

  return (
    <Col lg={3} md={4} sm={6} xs={12} style={{ marginTop: 15 }}>
      <Card onMouseEnter={() => {setShowButton(true)}} onMouseLeave={() => {setShowButton(false)}} style={{ boxShadow: "2px 2px 10px #e2e2e2", cursor: "pointer", position: "relative" }}>
      {showButton && showAddButton && <span className="add-to-cart"><FontAwesomeIcon icon={faPlusCircle} />  Add to cart</span>} 
      {showButton && !showAddButton && <span className="remove-from-cart"><FontAwesomeIcon icon={faTimesCircle} /> Remove from cart</span>} 
        <div className="flexbox" style={{ placeContent: "center", padding: 5}}>
          <img  src={image} alt={title} style={{ height: 120, opacity: showButton ? 0.7 : 1 }} />
        </div>

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{author}</Card.Text>
          <Card.Text>{description}</Card.Text>
          
          <Card.Text>
            <span className="bottom-details duration-section"><FontAwesomeIcon icon={faClock} /> {duration}</span> 
            <span className="bottom-details publish-date-section"><FontAwesomeIcon icon={faCalendar} /> {publishDate}</span></Card.Text>
           </Card.Body>
      </Card>
    </Col>
  );
};

export default BookCardComponent;
