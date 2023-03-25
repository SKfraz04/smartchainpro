import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="polygon-btn">
      <Button variant="primary">Total Borrow</Button>{" "}
      <Button variant="primary">Borrow APR</Button>{" "}
      <Button variant="primary">Reserve</Button>{" "}
      <Button variant="primary">Utilization</Button>{" "}
      <div className="d-flex">
        <Button variant="primary">Supply</Button>{" "}
        <Button variant="primary">Withdraw</Button>{" "}
      </div>
      <div className="d-flex">
        <Button variant="primary">Borrow</Button>{" "}
        <Button variant="primary">Redeem</Button>{" "}
      </div>
    </div>
  );
}

export default App;
