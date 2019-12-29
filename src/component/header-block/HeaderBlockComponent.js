import React, { Fragment } from "react";
import {
  Navbar,
  Button,
  Nav,
  Container,
  Jumbotron,
  Badge,
  OverlayTrigger,
  Popover,
  ListGroup
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import SearchBoxComponent from "../search-box/SearchBoxComponent";
import HeaderShoppingCartItems from "../header-shopping-cart/HeaderShoppingCartItems";

const HeaderBlockComponent = ({
  onSignInClick,
  onSignOutClick,
  onSearch,
  signedIn,
  cart,
  books
}) => {
  return (
    <Fragment>
      <Navbar className="navigation-bar" bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            className="header-logo-image"
            src="https://appexchange.salesforce.com/servlet/servlet.FileDownload?file=00P3A00000a2QcXUAU"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <span className="header-options">
            <span style={{ position: "relative" }}>
              <OverlayTrigger
                trigger="hover"
                key="bottom"
                placement="bottom"
                overlay={
                  <Popover id={`popover-positioned-bottom`}>
                    <Popover.Title as="h3">
                      Shopping Cart ({cart.length})
                    </Popover.Title>
                    <Popover.Content>
                      <ListGroup>
                        {cart.length === 0 && (
                          <ListGroup.Item
                            style={{ color: "gray" }}
                            key="no-item"
                          >
                            <FontAwesomeIcon icon={faExclamationCircle} /> No
                            Items in Cart
                          </ListGroup.Item>
                        )}
                        {books.map((book, index) => {
                          if (cart.includes(book.id)) {
                            return (
                              <HeaderShoppingCartItems
                                book={book}
                                index={index}
                              />
                            );
                          } else {
                            return null;
                          }
                        })}
                      </ListGroup>
                    </Popover.Content>
                  </Popover>
                }
              >
                <span style={{ cursor: "pointer" }}>
                  <FontAwesomeIcon icon={faShoppingCart} />{" "}
                  <Badge variant="danger" className="badge-count">
                    {cart.length}
                  </Badge>
                </span>
              </OverlayTrigger>
            </span>
            {signedIn && (
              <Button
                variant="outline-danger"
                style={{ marginLeft: 15 }}
                onClick={() => onSignOutClick()}
              >
                Sign out
              </Button>
            )}
            {!signedIn && (
              <Button
                variant="outline-primary"
                style={{ marginLeft: 15 }}
                onClick={() => onSignInClick()}
              >
                Sign in
              </Button>
            )}
          </span>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Jumbotron className="jumbotron-background">
          <div style={{ maxWidth: 500 }}>
            <h1 style={{ color: "#e8e6e6" }}>A special thank you</h1>
            <p style={{ color: "#c7c7c7" }}>
              We appreciate students like you. Get courses from ₹432! Ends Dec.
              26.
            </p>

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
