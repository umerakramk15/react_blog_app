import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Container from "../../components/Container/Container";

import axios from "axios";


function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/auth/register",
        { username, email, password, phone }
      );

      if (data?.sucess) {
        console.log("User Created");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <Container>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <input
              type="name"
              className="form-control"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="email"
            />
          </div>
          <div className="form-group">
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="phone"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Container>
    </Layout>
  );
}

export default Register;
