// import {
//   AppBar,
//   Container,
//   MenuItem,
//   Select,
//   Toolbar,
//   Typography,
// } from "@material-ui/core";
// import {
//   createTheme,
//   makeStyles,
//   ThemeProvider,
// } from "@material-ui/core/styles";
// import { useHistory } from "react-router-dom";
// import { CryptoState } from "../CryptoContext";

// const useStyles = makeStyles((theme) => ({
//   title: {
//     flex: 1,
//     color: "#3b95e2",
//     fontFamily: "Titillium",
//     fontWeight: "bold",
//     cursor: "pointer",
//   },
// }));

// const darkTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#fff",
//     },
//     type: "dark",
//   },
// });

// function Header() {
//   const classes = useStyles();
//   const { currency, setCurrency } = CryptoState();

//   const history = useHistory();

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <AppBar color="transparent" position="static">
//         <Container>
//           <Toolbar>
//             <Typography
//               onClick={() => history.push(`/`)}
//               variant="h6"
//               className={classes.title}
//             >
//               Crypto Tracker
//             </Typography>
//             {/* <Button color="inherit">Login</Button> */}
//             <Select
//               variant="outlined"
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               value={currency}
//               style={{ width: 100, height: 40, marginLeft: 15 }}
//               onChange={(e) => setCurrency(e.target.value)}
//             >
//               <MenuItem value={"USD"}>USD</MenuItem>
//               <MenuItem value={"INR"}>INR</MenuItem>
//               <MenuItem value={"EUR"}>EUR</MenuItem>
//               <MenuItem value={"JPY"}>JPY</MenuItem>
//             </Select>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </ThemeProvider>
//   );
// }

// export default Header;
import {
  AppBar,
  Button,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "#3b95e2",
    fontFamily: "Titillium",
    fontWeight: "bold",
    cursor: "pointer",
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

function Header() {
  const classes = useStyles();
  const { currency, setCurrency, user, setUser } = CryptoState();

  const history = useHistory();

  const handleLogout = () => {
    // Log out user and update user state
    setUser(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
            >
              Crypto Tracker
            </Typography>
            
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
              <MenuItem value={"JPY"}>JPY</MenuItem>
            </Select>
            {user ? (
              <>
                <Button color="inherit" onClick={() => history.push('/profile')}>Profile</Button>
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <Button color="inherit" onClick={() => history.push('/signup')}>Sign Up</Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
