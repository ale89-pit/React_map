import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NewComment from "./NewComment";
import CommentList from "./CommentList"

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

    componentDidMount() {
        this.getComment()
        console.log(this.state.review)
    }
    render() {
        return (
            <div>
                <CommentList comment={this.state.review} />
                <NewComment id={this.props.elementId} />
            </div>
        )
    }
}

export default CommentArea