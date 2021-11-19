
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

import './Home.css'
export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = () => {
    alert("submitted successfully");
  };
  return (
    <div>
     
      <br />
      <button type="button" class="btn btn-warning" onClick={showModal}>Add</button>

      <div class="row">
        <div class="card border-warning" >
          <div class="card-header">CREDIT</div>
          <div class="card-body">
            <table class="table">
              <thead class="table-dark">
                <td class="table-primary"></td>
                <td class="table-primary">SI.NO</td>
                <td class="table-secondary">Description</td>
                <td class="table-success">Credit Amount</td>
              </thead>
              <tbody>
                <tr>
                  <th><input type="checkbox"></input></th>
                  <th>1</th>
                  <th>des</th>
                  <th>200</th>
                </tr>
                <tr>
                  <th></th> <th></th>
                  <th>Total</th>
                  <th>100</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card border-warning" >
          <div class="card-header">DEBIT</div>
          <div class="card-body">
            <table class="table">
              <thead class="table-dark">
                <td class="table-primary"></td>
                <td class="table-primary">SI.NO</td>
                <td class="table-secondary">Description</td>
                <td class="table-success">Debit Amount</td>
              </thead>
              <tbody>
                <tr>
                  <th><input type="checkbox"></input></th>
                  <th>1</th>
                  <th>des</th>
                  <th>200</th>
                </tr>
                <tr>
                  <th></th> <th></th>
                  <th>Total</th>
                  <th>100</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Add credit/debit</Modal.Title>
        </Modal.Header>
        <Modal.Body><form>
  <div class="mb-3">
    <label class="form-label">Date</label>
    <input type="email" class="form-control"/>
  </div>
  <div class="mb-3">
    <label  class="form-label">Time</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label  class="form-label">Description</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
  <label  class="form-label">Amount tyep</label>
  <select class="form-select" aria-label="Default select example">
  <option selected> select amount type</option>
  <option value="debit">Debit</option>
  <option value="credit">Credit</option>
</select>
    </div>
    <div class="mb-3">
    <label  class="form-label">Amount</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
</form></Modal.Body>
        <Modal.Footer>
          <button type="submit" class="btn btn-danger" onClick={hideModal}>Cancel</button>
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}