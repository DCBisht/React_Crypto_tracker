import React, { useState } from "react";
import styles from "./signIn.css";
import InputControl from '../InputControl/InputControl';
import { Link, useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


function SignIn({setUser}) {
  const navigate = useHistory();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      //THIS ASYNC WILL NAVIGATE TO HOMEPAGE AFTER LOG IN
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        console.log(res.user)
        setUser({email : res.user.email , name : res.user.displayName})
        navigate.push("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };



  return (
    <div >
      <div style={{marginTop:'10%'}}>
        <h1 style={{ color: '#3498db' }} >Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div>
          <b style={{ color: 'red', fontSize: '10px', marginRight: '3px', fontWeight: '500' }} >{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission} className="btn btn-primary">
            Login
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}


export default SignIn