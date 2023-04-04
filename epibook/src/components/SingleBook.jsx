import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import CommentArea from './CommentArea';
import CloseButton from 'react-bootstrap/esm/CloseButton';



class SingleBook extends Component {
    state = {
        isSelected: false,
    }
    handleClick = (e) => {

        this.setState({
            isSelected: true

        })
        console.log(e.target)
    }
    render() {
        let visibility = this.state.isSelected ? "d-block" : "d-none"
        let cardClass = this.state.isSelected ? "redBorder" : "";
        return (
            <Col xs={6} lg={4} xl={3} className='position-relative '>
                <Card onClick={this.handleClick} className={`mb-2  ${cardClass} overflow-scroll scrollbar`}>

                    <Card.Img variant="top" src={this.props.book.img} />
                    <Card.Body>

                        <Card.Text className="text-truncate">
                            {this.props.book.title}
                        </Card.Text>
                        <Card.Text>{this.props.book.price} €</Card.Text>
                        <Button variant="primary">Buy</Button>
                        {

                            this.state.isSelected && <CommentArea elementId={this.props.book.asin} selected={this.state.isSelected} />
                        }
                    </Card.Body>
                </Card>
                <CloseButton className={`position-absolute top-0 start-100 translate-middle ${visibility}`} onClick={(e) => this.setState({ isSelected: false })} />
            </Col>

        )

    }
}


export default SingleBook