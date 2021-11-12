import React from "react";
import Login from "./Login";
import Forgotpass from "./Forgotpass";
import { useHistory } from "react-router";
import { Form } from "react-bootstrap";
import "./Login.css";

const LoginMainComponent = (props) => {
  const { check, setCheck } = props;
  const history = useHistory();
  return (
    <div onSubmit={() => alert("Signed in Successfully")}>
      <Form.Label for="email" className="changeFont input-box-length">
        Email
      </Form.Label>
      <Form.Control
        type="email"
        className="changeFont"
        placeholder="E-mail"
        required
      />
      <Form.Label for="password" className="changeFont input-box-length">
        Password
      </Form.Label>
      <Form.Control
        type="password"
        className="changeFont"
        placeholder="Password"
        required
      />
      <p onClick={() => setCheck(1)} className="changeFont">
        Forgot Your Password?
      </p>
      <input
        type="submit"
        value="SIGN IN"
        class="btn btn-primary"
        style={{
          color: "white",
          backgroundColor: "black",
          borderRadius: "155px",
          fontWeight: "20px",
          width: "100px",
          textAlign: "center",
        }}
      />
      <span>or</span>
      <span
        href="#"
        className="return"
        onClick={() => history.push("/products")}
      >
        Return To Store
      </span>
      <br />
      <br />
    </div>
  );
};

export default LoginMainComponent;