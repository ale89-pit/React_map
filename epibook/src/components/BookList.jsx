import { Component } from "react";
import romance from '../data/romance.json'
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import scifi from '../data/scifi.json'
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/esm/Button";
class BookList extends Component{
    state = {
        serchString : '',

    }
    bookArray = this.props.book
//  filterBookList = ()=>{
//    let bookArray = this.bookArray.filter(book =>{
//     return (book.title.toLowerCase().includes(this.state.serchString.toLocaleLowerCase()))
//    })   
// console.log(arraySerch)

// }
  
  render(){
        return(
          <>  
            <Form onSubmit={(e)=>{
        e.preventDefault()
        
      }}>
      <Form.Group className="mb-3" >
        <Form.Label>Trova libro</Form.Label>
        <Form.Control type="text" placeholder="Trova il libro per te" 
        value={this.state.serchString} onChange={(e)=>{
            this.setState({
                serchString : e.target.value
            })
        }}/>
        
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

         { this.bookArray.map(book =>{
                return(
                     <SingleBook book={book}/>
                )
                
                })}
       </> )
    }
}

export default BookList