import React, { useState } from "react";
import "./ItemListPage.modules.scss";
import { Container, Row, Col, Alert } from "react-bootstrap";
import BookCardComponent from "../component/book-card/BookCardComponent";
import HeaderBlockComponent from "../component/header-block/HeaderBlockComponent";
import { bookData } from "../data/data";

const ItemListPage = () => {
  const [books, setBooks] = useState(bookData);
  const handleBookSearch = search => {
    let filterData = [];
    bookData.forEach(book => {
      const { description, author, name } = book;
      if (description.toLowerCase().includes(search.toLowerCase()) || author.toLowerCase().includes(search.toLowerCase()) || name.toLowerCase().includes(search.toLowerCase())) {
        filterData.push(book);
      }
    });
    setBooks(filterData);
  };
  return (
    <Container>
      <HeaderBlockComponent
        onSearch={search => handleBookSearch(search)} />
      <Row className="items" style={{ marginTop: -30 }}>
        {books.map(({ image, description, author, publishDate, duration, name, id }) => {
          return (
            <BookCardComponent
              key={`book-${id}`}
              id={id}
              image={image}
              title={name}
              description={description}
              author={author}
              publishDate={publishDate}
              duration={duration}
            />
          );
        })}
        {books.length === 0 &&
          <Col style={{ padding: 20 }}><Alert variant="danger">No Books Found !</Alert></Col>}
      </Row>
    </Container>
  );
};

export default ItemListPage;
