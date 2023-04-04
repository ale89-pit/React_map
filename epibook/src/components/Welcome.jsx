import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import Form from 'react-bootstrap/Form'



function Welcome() {
  return (

    <div className="jumbotron mb-4">
      <h1 className="display-4">Hello, world!</h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </p>
      {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Select aria-label="Default select example"
          value={this.} onChange={(e) => this.props.changeAppState.value}>
          <option>Open this select menu</option>
          <option value="1">horro</option>
          <option value="2">fantasy</option>
          <option value="3">romance</option>
          <option value="4">scifi</option>
          <option value="5">history</option>
        </Form.Select>
      </Form.Group> */}
    </div>


  )
}
}

export default Welcome