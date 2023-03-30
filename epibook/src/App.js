import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookNavBar from "./components/BookNavBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import BookList from "./components/BookList";
import horror from "./data/horror.json";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <div className="App h-100">
      <BookNavBar />
      <Welcome />
      <Container>
        <Row>
          <BookList book={horror} />
        </Row>
      </Container>
      <Footer fixed="bottom" />
    </div>
  );
}

export default App;
