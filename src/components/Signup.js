import { Button, Container, TextField, Typography } from "@material-ui/core";
import { makeStyles, ThemeProvider, createTheme } from "@material-ui/core/styles";
import { useState } from "react";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
    marginBottom: '20px',
  },
  input: {
    marginBottom: '20px',
    width: '100%',
  },
  button: {
    width: '100%',
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Signup() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = CryptoState();

  const handleSignup = (event) => {
    event.preventDefault();
    // TODO: Implement signup logic and set user state.
    setUser(username);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="h4" className={classes.title}>Sign Up</Typography>
        <form onSubmit={handleSignup}>
          <TextField
            type="text"
            label="Username"
            variant="outlined"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className={classes.input}
            required
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className={classes.input}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Sign Up
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
}

export default Signup;
