import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Container from "../../components/Container/Container";

import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        { email, password }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <Container>
        <form onSubmit={handleLogin}>
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

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Container>
    </Layout>
  );
}

export default Login;
