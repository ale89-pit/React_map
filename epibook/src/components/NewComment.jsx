import { Component } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NewComment extends Component {
    state = {
        review: {
            rate: '',
            comment: '',
            elementId: this.props.id
        }
    }
    sendComment = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
                method: 'POST',
                body: JSON.stringify(this.state.review),

                headers: {

                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMDk1MzBlNzg3MDAwMTRkODkxYzAiLCJpYXQiOjE2ODA1NDIwMzYsImV4cCI6MTY4MTc1MTYzNn0.76zUkksEzzVTHBeK-tBeJC58on0slRYzjGSC1e-MG8c",
                    'Content-Type': 'application/json',

                },

            }
            )
            if (response.ok) {
                alert('Recensione inviata correttamente')
            } else {
                console.log('Fetch fallita')
            }
        } catch (error) {
            console.log("Errore ")
        }

    }
    render() {
        return (
            <Form onSubmit={(e) => {
                e.preventDefault()
                this.sendComment()
            }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Select aria-label="Default select example"
                        value={this.state.review.rate} onChange={(e) => this.setState({
                            review: {
                                ...this.state.review,
                                rate: e.target.value,
                            }
                        })}>
                        <option>Open this select menu</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} value={this.state.review.comment} onChange={(e) => this.setState({
                        review: {
                            ...this.state.review,
                            comment: e.target.value
                        }

                    })} />
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" onClick={this.sendComment}>Send</Button>
                </Form.Group>
            </Form>
        )
    }
}

export default NewComment