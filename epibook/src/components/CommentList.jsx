import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {

    render() {
        return (
            this.props.comment.slice(-6).map((com) => <SingleComment key={com._id} id={com._id} comment={com.comment} rate={com.rate} />)
        )
    }
}

export default CommentList