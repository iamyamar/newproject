import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../../components/commonComponent/PageBanner/PageBanner";
import { useHistory } from "react-router";
import "./Register.css";
import { Form } from "react-bootstrap";

const Register = () => {
  const history = useHistory();
  return (
    <div>
      <PageBanner title="Create Account" dontShowTitle={true} menu={true} />
      <div className="formpar">
        <Form
          onSubmit={() => alert("Registered Successfully")}
          style={{ padding: "10px 0" }}
        >
          <fieldset className="form">
            <legend>
              <p style={{ fontFamily: "Oswald" }}>Your Personal Details:</p>
            </legend>
            <hr />
            <div>
              <div className="col-sm-2 boxok">
                <span>
                  <Form.Label for="fname">
                    <span className="redStar">*</span>First name
                  </Form.Label>
                </span>
              </div>
              <div className="col-sm-10 boxok">
                <Form.Control
                  type="text"
                  className="ip"
                  id="fname"
                  name="fname"
                  placeholder="First Name"
                  required
                />
              </div>
            </div>
            <div>
              <div className="col-sm-2 boxok">
                <Form.Label for="fname">
                  <span className="redStar">*</span>Last name
                </Form.Label>
              </div>
              <div className="col-sm-10 boxok">
                <Form.Control
                  type="text"
                  className="ip"
                  id="lname"
                  name="lname"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div>
              <div className="col-sm-2 boxok">
                <Form.Label for="fname">
                  <span className="redStar">*</span>E-mail
                </Form.Label>
              </div>
              <div className="col-sm-10 boxok">
                <Form.Control
                  type="email"
                  className="ip"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  required
                />
              </div>
            </div>
            <div>
              <div className="col-sm-2 boxok">
                <Form.Label for="fname">
                  <span className="redStar">*</span>Password
                </Form.Label>
              </div>
              <div className="col-sm-10 boxok">
                <Form.Control
                  type="password"
                  className="ip"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
          </fieldset>
          <div style={{ padding: "40px" }}>
            <button
              name="submitcreate"
              id="button-account"
              type="submit"
              className="btnreg"
            >
              <span>
                <i
                  class="fa fa-user left"
                  style={{
                    color: "white",
                    weight: "200px",
                    paddingRight: "10px",
                  }}
                ></i>
                Create
              </span>
            </button>
            <span>or</span>
            <span
              href="#"
              className="return"
              onClick={() => history.push("/products")}
            >
              Return To Store
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;