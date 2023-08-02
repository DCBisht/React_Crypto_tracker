import React, { useState } from "react";
import InputControl from "../InputControl/InputControl";
import { Link, useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";
// Get the reference of the database.

function SignUp({setUser}) {
  const database = getDatabase();
  const navigate = useHistory();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    stream: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    //CHECKING IF THE USER HAS ENTERED ALL THE DETAILS OR NOT
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    // THIS CREATEUSERWITHEMAILANDPASSWORD PROVIDES TO AUTHENTICATE THE MAIL AND PASSWORD BY THE FIREBASE
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        // FOR DISPLAYING NAME PROPERTY
        const user = res.user;
        setUser({email : user.email , name : user.displayName})
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate.push("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh', backgroundColor: 'black' }}>
      <div style={{ width: '500px', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '20px', borderRadius: '10px', backgroundColor: 'grey', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', alignItems: 'flex-start' }}>
        <h1 style={{ color:'#3498db', textAlign: 'center', margin: ' 0px auto 20px auto' }}>Signup</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
          style={{ marginBottom: '10px', fontSize: '20px', borderRadius: '10px', background: 'transpat'}}
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          style={{ marginBottom: '10px' }}
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          style={{ marginBottom: '10px' }}
        />

        <div>
          <b style={{color:'red',fontSize:'10px', marginRight:'3px', fontWeight:'500'}} >{errorMsg}</b>
          <button style={{ marginBottom: '10px' }} onClick={handleSubmission} disabled={submitButtonDisabled} className="btn btn-primary"> 
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">LogIn</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
