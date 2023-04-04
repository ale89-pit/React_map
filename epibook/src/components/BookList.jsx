import { Component, useState } from "react";
import romance from '../data/romance.json'
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import scifi from '../data/scifi.json'
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/esm/Button";
import CommentArea from "./CommentArea";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";



const BookList = (props) => {
  // state = {
  //   serchString: '',
  //   bookArray: this.props.book,
  //   selectedBook: null

  // }
  const [serchString, setSearchString] = useState("")
  const [bookArray, setBookArray] = useState(props.book)
  const [selectedBook, setSelectedBook] = useState(null)

  console.log(bookArray)
  const changeSelectedBook = (asin) => {
    setSelectedBook(asin)
    // this.setState({
    //   selectedBook: asin

    // })
  }
  const filterBookList = () => {
    return props.book.filter(book =>
      (book.title.toLowerCase().includes(serchString.toLowerCase()))
    )


  }


  return (
    <Row>
      <Col md={8}>
        <Row>
          <Col>
            <Form onSubmit={(e) => {
              e.preventDefault()
              setBookArray(filterBookList())
              // this.setState({
              //   bookArray: this.filterBookList()
              // })

            }}>
              <Form.Group className="mb-3" >
                <Form.Label>Trova libro</Form.Label>
                <Form.Control type="text" placeholder="Trova il libro per te"
                  value={serchString} onChange={(e) => {
                    setSearchString(e.target.value)
                    // this.setState({
                    //   serchString: e.target.value
                    // })
                  }} />

              </Form.Group>


              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>

          {bookArray.map(onebook => {
            return (
              <Col xs={12} md={4} key={onebook.a}>
                <SingleBook onebook={onebook} selectedBook={selectedBook} changeSelectedBook={changeSelectedBook} />
              </Col>
            )

          })}
        </Row>
      </Col>
      <CommentArea elementId={selectedBook} />
    </Row>
  )

}

export default BookList