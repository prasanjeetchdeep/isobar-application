import React, {Fragment} from 'react';
import { Navbar, Button, Nav, Container, Jumbotron, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import SearchBoxComponent from "../search-box/SearchBoxComponent";

const HeaderBlockComponent = ({
    onSearch
}) => {
return(
    <Fragment>
        <Navbar className="navigation-bar" bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            class="header-logo-image"
            src="https://appexchange.salesforce.com/servlet/servlet.FileDownload?file=00P3A00000a2QcXUAU"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <span classname="header-options">
            <span style={{ position: "relative" }}>
              <FontAwesomeIcon icon={faShoppingCart} /> <Badge variant="danger" className="badge-count" >3</Badge>
            </span>
            <Button variant="outline-primary" style={{ marginLeft: 15 }}>Sign in</Button>

          </span>

        </Navbar.Collapse>
      </Navbar>
      <Container><Jumbotron className="jumbotron-background">
        <div style={{ maxWidth: 500 }}>
          <h1 style={{ color: "#e8e6e6" }}>A special thank you</h1>
          <p style={{ color: "#c7c7c7" }}>We appreciate students like you. Get courses from ₹432! Ends Dec. 26.</p>

          <SearchBoxComponent
            className="header-search-box"
            onSearch={search => onSearch(search)}
          />
        </div>
      </Jumbotron>
      </Container>
        </Fragment>
);
};

export default HeaderBlockComponent;