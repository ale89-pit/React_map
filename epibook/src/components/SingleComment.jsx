import { Component } from "react";

class SingleComment extends Component {
    state = {
        id: this.props.id
    }
    deleteComment = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.id}/`, {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMDk1MzBlNzg3MDAwMTRkODkxYzAiLCJpYXQiOjE2ODA1NDIwMzYsImV4cCI6MTY4MTc1MTYzNn0.76zUkksEzzVTHBeK-tBeJC58on0slRYzjGSC1e-MG8c"
                },
            });
            if (response.ok) {
                alert('Commento eliminato')
            } else {
                return new Error('Errore')
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center w-100 ">
                <span className="w-100">
                    <h5>{this.props.comment}</h5>
                    <p>rate:  {this.props.rate}</p>
                </span>
                <span onClick={this.deleteComment} className="w-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="50" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </span>
            </div>
        )
    }
}

export default SingleComment