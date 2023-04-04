import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NewComment from "./NewComment";
import CommentList from "./CommentList"
import Col from "react-bootstrap/Col"

class CommentArea extends Component {
    state = {

        review: []


    }
    getComment = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.elementId}`, {

                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMDk1MzBlNzg3MDAwMTRkODkxYzAiLCJpYXQiOjE2ODA1NDIwMzYsImV4cCI6MTY4MTc1MTYzNn0.76zUkksEzzVTHBeK-tBeJC58on0slRYzjGSC1e-MG8c"
                }

            }
            )
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                this.setState({ review: data })
            } else {
                console.log('Fetch fallita')
            }
        } catch (error) {
            console.log("Errore ")
        }

    }

    componentDidUpdate(prevProps) {
       if(prevProps.elementId !== this.props.elementId){
        this.getComment()
        console.log(this.state.review)
       } 
    }
    render() {
        return (
            <Col md={4} >
                <CommentList comment={this.state.review} />
                <NewComment id={this.props.elementId} />
            </Col>
        )
    }
}

export default CommentArea