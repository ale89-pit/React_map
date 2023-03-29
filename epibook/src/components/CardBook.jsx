import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";

import fantasy from '../data/fantasy.json'


class CardBook extends Component{
    state = {
        BookArray : null
    }

render (){
    return(
        <>
        {fantasy.map((book)=>{
            console.log(book)
            return(
       <Col xs={6} lg={4} xl={3}>
        <Card key={book.asin} className="mb-2">
            
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        
        <Card.Text>
        {book.title}
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    </Col>
)
    }) }
    
        </>
    )
}}



export default CardBook 