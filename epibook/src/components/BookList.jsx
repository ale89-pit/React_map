import { Component } from "react";
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
class BookList extends Component {
  state = {
    serchString: '',
    bookArray: this.props.book,
    selectedBook: null

  }
  changeSelectedBook = (asin) => {

    this.setState({
      selectedBook: asin

    })
  }
  filterBookList = () => {
    return this.props.book.filter(book =>
      (book.title.toLowerCase().includes(this.state.serchString.toLowerCase()))
    )


  }

  render() {
    return (
      <Row>
        <Col md={8}>
          <Row>
            <Col>
              <Form onSubmit={(e) => {
                e.preventDefault()
                this.setState({
                  bookArray: this.filterBookList()
                })

              }}>
                <Form.Group className="mb-3" >
                  <Form.Label>Trova libro</Form.Label>
                  <Form.Control type="text" placeholder="Trova il libro per te"
                    value={this.state.serchString} onChange={(e) => {
                      this.setState({
                        serchString: e.target.value
                      })
                    }} />

                </Form.Group>


                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>

            {this.state.bookArray.map(onebook => {
              return (
                <Col xs={12} md={4} key={onebook.asin}>
                <SingleBook onebook={onebook} selectedBook={this.state.selectedBook} changeSelectedBook={this.changeSelectedBook} />
                </Col>
              )

            })}
          </Row>
          </Col>
          <CommentArea elementId={this.state.selectedBook} />
      </Row>
      )
  }
}

export default BookList