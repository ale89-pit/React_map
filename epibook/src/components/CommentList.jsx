import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {

    render() {
        return (
            this.props.comment.map((com) => <SingleComment id={com._id} comment={com.comment} rate={com.rate} />)
        )
    }
}

export default CommentList