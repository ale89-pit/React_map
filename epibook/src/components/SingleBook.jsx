import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import CommentArea from './CommentArea';
import CloseButton from 'react-bootstrap/esm/CloseButton';



const SingleBook = (props) => {
    
    // handleClick = (e) => {

    //     this.setState({
    //         isSelected: !this.state.isSelected

    //     })
     
    
    
        // let visibility = this.state.isSelected ? "d-block" : "d-none"
        // let cardClass = this.state.isSelected ? "redBorder" : "";
        return (
            <>
            
                <Card onClick={() => props.changeSelectedBook(props.onebook.asin)}   style={{
            border:
              props.selectedBook === props.onebook.asin
                ? '3px solid red'
                : 'none',
          }}>

                    <Card.Img variant="top" src={props.onebook.img} />
                    <Card.Body>

                        <Card.Text className="text-truncate">
                            {props.onebook.title}
                        </Card.Text>
                        <Card.Text>{props.onebook.price} €</Card.Text>
                        <Button variant="primary">Buy</Button>
                        
                    </Card.Body>
                </Card>
                
            
            
            </>
        )

    
}


export default SingleBook