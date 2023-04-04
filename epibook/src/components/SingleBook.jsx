import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import CommentArea from './CommentArea';
import CloseButton from 'react-bootstrap/esm/CloseButton';



class SingleBook extends Component {
    
    // handleClick = (e) => {

    //     this.setState({
    //         isSelected: !this.state.isSelected

    //     })
     
    
    render() {
        // let visibility = this.state.isSelected ? "d-block" : "d-none"
        // let cardClass = this.state.isSelected ? "redBorder" : "";
        return (
            <>
            
                <Card onClick={() => this.props.changeSelectedBook(this.props.onebook.asin)}   style={{
            border:
              this.props.selectedBook === this.props.onebook.asin
                ? '3px solid red'
                : 'none',
          }}>

                    <Card.Img variant="top" src={this.props.onebook.img} />
                    <Card.Body>

                        <Card.Text className="text-truncate">
                            {this.props.onebook.title}
                        </Card.Text>
                        <Card.Text>{this.props.onebook.price} €</Card.Text>
                        <Button variant="primary">Buy</Button>
                        
                    </Card.Body>
                </Card>
                
            
            
            </>
        )

    }
}


export default SingleBook