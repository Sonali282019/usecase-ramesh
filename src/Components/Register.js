import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import  {register} from "./Auth.js" 


const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  
  const onChangeFname = (e) => {
    const fname = e.target.value;
    setFname(fname);
  };
  const onChangeLname = (e) => {
    const lname = e.target.value;
    setLname(lname);
  };
  const onChangeDob = (e) => {
    const dob = e.target.value;
    setDob(dob);
  };
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    //if (checkBtn.current.context._errors.length === 0) {
      register(fname, lname, dob, username,email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    //}
  };

  return (
    <div className="col-md-12" align="center">
      <div className="card card-container">
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
<div className="form-group">
                <label htmlFor="fname">First Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="fname"
                  value={fname}
                  onChange={onChangeFname}
                  
                />
              </div>
              <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="lname"
                  value={lname}
                  onChange={onChangeLname}
                  
                />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <Input
                  type="text"
                  className="form-control"
                  name="dob"
                  value={dob}
                  onChange={onChangeDob}
                  
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">username</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  
                />
              </div>

              <div className="form-group">
                <button className="btn-custom">Sign Up</button>
              </div>
            </div>
          )}

          
        </Form>
      </div>
    </div>
  );
};

export default Register;