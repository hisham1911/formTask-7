import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import { Button } from "react-bootstrap";
import Register from "./components/form";

function App() {
  return (
    <div className="App">
        <h1 className="text-center text-primary">Sign Up</h1>
      <Register/>
    </div>
  );
}

export default App;
