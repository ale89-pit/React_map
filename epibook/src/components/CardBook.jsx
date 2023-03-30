import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Dropdown from 'react-bootstrap/Dropdown';
import romance from '../data/romance.json'
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import scifi from '../data/scifi.json'

let allBook = romance.concat(fantasy, history, horror, scifi)
console.log(allBook)


class CardBook extends Component {
    state = {
        bookArray: null
    }


    render() {
        
        return( 
            // <Dropdown>
            //                 <Dropdown.Toggle variant="success" id="dropdown-basic">
            //                     Category
            //                 </Dropdown.Toggle>

            //                 <Dropdown.Menu>
            //                     <Dropdown.Item href="#/action-1" onClick={() => {
            //                         this.setState({
            //                             bookArray: book.category
            //                         })
            //                     }}>Romance</Dropdown.Item>
            //                     <Dropdown.Item href="#/action-2">Fantasy</Dropdown.Item>
            //                     <Dropdown.Item href="#/action-3">History</Dropdown.Item>
            //                     <Dropdown.Item href="#/action-3">Horror</Dropdown.Item>
            //                     <Dropdown.Item href="#/action-3">SciFi</Dropdown.Item>
            //                 </Dropdown.Menu>
            //             </Dropdown> 
            allBook.map((book) => {
                return (
                    <>
                        {




                        <Col key={book.asin} xs={6} lg={4} xl={3}>
                            <Card className="mb-2">

                                <Card.Img variant="top" src={book.img} />
                                <Card.Body>

                                    <Card.Text className="text-truncate">
                                        {book.title}
                                    </Card.Text>
                                    <Card.Text>{book.price} €</Card.Text>
                                    <Button variant="primary">Buy</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        }

                    </>
                )
            }
            ))
        
           
        
    }

}

export default CardBook 