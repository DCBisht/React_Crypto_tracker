import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import SignIn from "./signIn/SignIn";
import SignUp from "./signOut/SignUp";
import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    fontFamily:"Titillium",
    minHeight: "100vh",
  },
}));

function App() {
  const [user , setUser] = useState(null);
  console.log(user);
  const classes = useStyles();
  const database = getDatabase();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header user={user} setUser={setUser}/>
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
        <Route path='/login' render={(props) => <SignIn setUser={setUser} {...props}/>}></Route>
        <Route path='/signup' render={(props) => <SignUp setUser={setUser} {...props}/>}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
