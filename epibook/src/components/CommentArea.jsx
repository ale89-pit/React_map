import { Component, useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NewComment from "./NewComment";
import CommentList from "./CommentList"
import Col from "react-bootstrap/Col"

const CommentArea = (props) => {
    // state = {

    //     review: []


    // }
    const [review, setReview] = useState([])


    const getComment = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.elementId}`, {

                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMDk1MzBlNzg3MDAwMTRkODkxYzAiLCJpYXQiOjE2ODA1NDIwMzYsImV4cCI6MTY4MTc1MTYzNn0.76zUkksEzzVTHBeK-tBeJC58on0slRYzjGSC1e-MG8c"
                }

            }
            )
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                setReview(data)
                // this.setState({ review: data })
            } else {
                console.log('Fetch fallita')
            }
        } catch (error) {
            console.log("Errore ")
        }

    }
    useEffect(() => {

        getComment()

    }, [props.elementId])
    // componentDidUpdate(prevProps) {
    //    if(prevProps.elementId !== this.props.elementId){
    //     this.getComment()
    //     console.log(this.state.review)
    //    } 
    // }

    return (
        <Col md={4} >
            <CommentList comment={review} />
            <NewComment id={props.elementId} />
        </Col>
    )

}

export default CommentArea