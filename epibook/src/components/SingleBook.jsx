import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";



function SingleBook (props){
    return (
        <Col key={props.book.asin} xs={6} lg={4} xl={3}>
        <Card className="mb-2">

            <Card.Img variant="top" src={props.book.img} />
            <Card.Body>

                <Card.Text className="text-truncate">
                    {props.book.title}
                </Card.Text>
                <Card.Text>{props.book.price} €</Card.Text>
                <Button variant="primary">Buy</Button>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default SingleBook