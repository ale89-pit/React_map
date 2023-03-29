import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookNavBar from "./components/BookNavBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import CardBook from "./components/CardBook";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  return (
    <div className="App h-100">
      <BookNavBar />
      <Welcome />
      <Container>
        <Row>
          <CardBook />
        </Row>
      </Container>
      <Footer fixed="bottom" />
    </div>
  );
}

export default App;
