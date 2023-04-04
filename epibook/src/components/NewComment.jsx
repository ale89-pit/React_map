import { Component, useState, useEffect } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const NewComment = (props) => {
    // state = {
    //     review: {
    //         rate: '',
    //         comment: '',
    //         elementId: this.props.id
    //     }
    // }
    const [review , setReview] = useState({
        comment : '',
        rate: '',
        elementId :props.id
    })
    


    const sendComment = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
                method: 'POST',
                body: JSON.stringify(review),

                headers: {

                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMDk1MzBlNzg3MDAwMTRkODkxYzAiLCJpYXQiOjE2ODA1NDIwMzYsImV4cCI6MTY4MTc1MTYzNn0.76zUkksEzzVTHBeK-tBeJC58on0slRYzjGSC1e-MG8c",
                    'Content-Type': 'application/json',

                },

            }
            )
            if (response.ok) {
                alert('Recensione inviata correttamente')
                // setReview({
                //     comment : '',
                //     rate: '',
                //     elementId :props.id
                // })
            } else {
                console.log('Fetch fallita')
            }
        } catch (error) {
            console.log("Errore ")
        }

    }
    useEffect(()=>{

        sendComment(review)
    
    },[])
    
        return (
            <Form onSubmit={(e) => {
                e.preventDefault()
                sendComment(review)
            }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Select aria-label="Default select example"
                        value={review.rate} onChange={(e) => 
                            setReview({...review,
                                rate : e.target.value
                            })
                             }>
                       
                       
                   
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
                    <Form.Control as="textarea" rows={3} value={review.comment} onChange={(e) => 
                    
                    // this.setState({
                    //     review: {
                    //         ...this.state.review,
                    //         comment: e.target.value
                    //     }

                    // })
                    setReview({...review,
                        comment : e.target.value
                    })
                    } />
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" type="submit">Send</Button>
                </Form.Group>
            </Form>
        )
    
}

export default NewComment