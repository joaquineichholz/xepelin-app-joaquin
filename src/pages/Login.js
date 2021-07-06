import React, { useState } from "react";
import "./../css/Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    if (email.length > 0 && password.length > 0 &&  email.includes("@")){
        return true
    }
    return false;
  }

  return (
    <div className="login">
      	<h1>Login</h1>
      <form method="post">
        <input type="text" name="u" placeholder="Username" required="required" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="p" placeholder="Password" required="required" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Link to="/home">
            <button type="submit" class="btn btn-primary btn-block btn-large" disabled={!validateForm() }>Login</button>
        </Link>
      </form>
    </div>
  );
}
  