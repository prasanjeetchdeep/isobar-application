import React, { useState } from "react";
import "./ItemListPage.modules.scss";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import BookCardComponent from "../component/book-card/BookCardComponent";
import HeaderBlockComponent from "../component/header-block/HeaderBlockComponent";
import { bookData } from "../data/data";
import LoginModalComponent from "../component/login-modal/LoginModalComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort,faHome,faChevronRight,faRedo } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";

const ItemListPage = () => {
  const [books, setBooks] = useState(bookData);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCartItem, setSelectedCartItem] = useState(null);
  const [sortByDate, setSortByDate] = useState("asc");
  const [sortByTiming, setSortByTiming] = useState("asc");
  const [sortMessage, setSortMessage] = useState("");

  const sortBooksByDate = sort => {
    let sortedBooks = books;
    switch (sort) {
      case "asc":
        setSortByDate("desc");
        break;
      case "desc":
        setSortByDate("asc");
        break;
      default:
        setSortByDate("asc");
    }
    sortedBooks = _.orderBy(
      sortedBooks,
      book => new Date(book.publishDate),
      sortByDate
    );

    let sortDirection = sortByDate === "asc" ? "Ascending" : "Descending";
    setBooks(sortedBooks);
    setSortMessage(`Ordered by Publish Date - ${sortDirection}`);
  };

  const sortBooksByTiming = sort => {
    let sortedBooks = books;
    switch (sort) {
      case "asc":
        setSortByTiming("desc");
        break;
      case "desc":
        setSortByTiming("asc");
        break;
      default:
        setSortByTiming("asc");
    }
    sortedBooks = _.orderBy(
      sortedBooks,
      book => getSeconds(book.duration),
      sortByTiming
    );
    
    let sortDirection = sortByTiming === "asc" ? "Ascending" : "Descending";
    setBooks(sortedBooks);
    setSortMessage(`Ordered by Video Duration - ${sortDirection}`);
  };

  const getSeconds = duration => {
    return duration.split(":").reduce((acc, time) => 60 * acc + +time);
  };

  const resetSort = () => {
    let sortedBooks = books;
    sortedBooks = _.orderBy(sortedBooks, book => book.id, "asc");
    setBooks(sortedBooks);
    setSortMessage("");
  };

  const handleSignIn = () => {
    setSignedIn(true);
    setShowLoginModal(false);
    if (selectedCartItem !== null) {
      setCart([...cart, selectedCartItem]);
      setSelectedCartItem(null);
    }
  };

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };

  const handleSignOutClick = () => {
    setShowLoginModal(false);
    setSignedIn(false);
    setCart([]);
    setSelectedCartItem(null);
  };

  const handleCartAction = id => {
    setSelectedCartItem(id);
    if (!signedIn) {
      setShowLoginModal(true);
      return;
    }
    let cartToUpdate = cart;
    let indexToRemove = cartToUpdate.indexOf(id);

    if (indexToRemove > -1) {
      cartToUpdate.splice(indexToRemove, 1);
    } else {
      cartToUpdate.push(id);
    }
    setCart([...cartToUpdate]);
  };

  const handleBookSearch = search => {
    let filterData = [];
    bookData.forEach(book => {
      const { description, author, name } = book;
      if (
        description.toLowerCase().includes(search.toLowerCase()) ||
        author.toLowerCase().includes(search.toLowerCase()) ||
        name.toLowerCase().includes(search.toLowerCase())
      ) {
        filterData.push(book);
      }
    });
    resetSort();
    setBooks(filterData);
  };

  return (
    <Container>
      <HeaderBlockComponent
        signedIn={signedIn}
        onSignInClick={() => setShowLoginModal(true)}
        onSignOutClick={() => handleSignOutClick()}
        onSearch={search => handleBookSearch(search)}
        cart={cart}
        books={books}
      />
      <Container>
        <Row className="header-bar">
          <Col lg={6} className="flexbox">
            <div>
              <FontAwesomeIcon icon={faHome} className="header-breadcrumb" />
              <FontAwesomeIcon
                icon={faChevronRight}
                className="header-breadcrumb"
              />
              <span className="header-breadcrumb">
                Search Results{" "}
                {sortMessage && (
                  <span className="sort-message"> ({sortMessage}) </span>
                )}
              </span>
            </div>
          </Col>
          <Col lg={6} className="text-align-right">
            Sort By :
            <Button
              variant="outline-primary"
              className="filter-options"
              onClick={() => sortBooksByDate(sortByDate)}
            >
              Date <FontAwesomeIcon icon={faSort} />
            </Button>
            <Button
              variant="outline-primary"
              className="filter-options"
              onClick={() => sortBooksByTiming(sortByTiming)}
            >
              Duration <FontAwesomeIcon icon={faSort} />
            </Button>
            {sortMessage && (
              <span
                className="filter-options"
                title="Reset Filter"
                onClick={() => resetSort()}
                color="gray"
                style={{ marginLeft: 30 }}
              >
                <FontAwesomeIcon icon={faRedo} color="gray" /> Reset
              </span>
            )}
          </Col>
        </Row>
      </Container>

      <Row className="items">
        {books.map(book => {
          return (
            <BookCardComponent
              key={`book-${book.id}`}
              book={book}
              isAddedtoCart={cart.includes(book.id) ? true : false}
              onButtonClick={id => handleCartAction(id)}
            />
          );
        })}
        {books.length === 0 && (
          <Col style={{ padding: 20 }}>
            <Alert variant="danger">No Books Found !</Alert>
          </Col>
        )}
      </Row>
      <LoginModalComponent
        show={showLoginModal}
        onSignedIn={() => handleSignIn()}
        onClose={() => handleLoginModalClose()}
      />
    </Container>
  );
};

export default ItemListPage;
