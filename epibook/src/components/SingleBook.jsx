import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";



class SingleBook extends Component {
    state = {
        isSelected : false,
    }
    handleClick = (e) => {
        this.setState({
            isSelected :!this.state.isSelected
        })
    }
    render(){
       let cardClass = this.state.isSelected ? "border" : "";
        return (
            <Col  onClick={this.handleClick} key={this.props.book.asin} xs={6} lg={4} xl={3}>
            <Card className={"mb-2" + {cardClass}}>
    
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
    
                    <Card.Text className="text-truncate">
                        {this.props.book.title}
                    </Card.Text>
                    <Card.Text>{this.props.book.price} €</Card.Text>
                    <Button variant="primary">Buy</Button>
                </Card.Body>
            </Card>
        </Col>
        
        )
        
    }
    }


export default SingleBook