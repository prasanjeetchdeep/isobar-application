import React, { Fragment } from "react";
import "./ItemListPage.modules.scss";
import {
  Navbar,
  Form,
  Button,
  Nav,
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
  Badge
} from "react-bootstrap";
import Sidebar from "react-sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import SearchBoxComponent from "../component/search-box/SearchBoxComponent";
import BookCardComponent from "../component/book-card/BookCardComponent";

const ItemListPage = () => {
  return (
    <Container>
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
            <span style={{position: "relative"}}>
            <FontAwesomeIcon icon={faShoppingCart} /> <Badge variant="danger" className="badge-count" >3</Badge>
            </span>
            <Button variant="outline-primary" style={{marginLeft: 15}}>Sign in</Button>
          
          </span>
          
        </Navbar.Collapse>
      </Navbar>
      <Container><Jumbotron className="jumbotron-background">
      <div style={{maxWidth: 500}}>
        <h1 style={{color: "#e8e6e6"}}>A special thank you</h1>
        <p style={{color: "#c7c7c7"}}>We appreciate students like you. Get courses from ₹432! Ends Dec. 26.</p>
        
        <SearchBoxComponent
              className="header-search-box"
              onSearch={() => {}}
            />
        </div>
      </Jumbotron>
      </Container>
        <Row className="items" style={{marginTop: -30}}>
          <BookCardComponent
            image="https://cdn.auth0.com/blog/react-js/react.png"
            title="React - basics"
            description="This course is going to take you through basics of React."
            author="James White"
            publishDate="12/03/2019"
            duration="00:03:56"
          />
          <BookCardComponent
            image="https://vuejs.org/images/logo.png"
            title="Vue - learn vue "
            description="This course teaches you how to build a vue application.."
            author="James White"
            publishDate="12/03/2019"
            duration="00:03:56"
          />

          <BookCardComponent
            image="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
            title="CSS Animations"
            description="Learn how to animate anything in CSS."
            author="Alan Smith"
            publishDate="04/12/2018"
            duration="00:03:56"
           />
          <BookCardComponent
            image="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"
            title="JS - Zero to hero"
            author="Sarah Parker"
            publishDate="12/03/2019"
            duration="00:03:56"
           description="Everything you need to know in JS."
          />

        </Row>
        
      
    </Container>
  );
};

export default ItemListPage;
