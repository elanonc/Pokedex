import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Container } from "react-bootstrap";
import Inicio from './Pages/Inicio';

function App() {

  return (
    <Router>
      <Container>
        <Routes>
        <Route path="/" element={<Inicio />}></Route>
        </Routes>
      </Container>
    </Router>
  )
}

export default App;
