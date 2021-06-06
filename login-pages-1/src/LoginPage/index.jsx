import React from "react";
import { debounce } from "lodash-es";

import {
  Box,
  Grid,
  Button,
  TextField,
  Container,
  Typography,
  FormControlLabel,
  Checkbox,
  Link,
} from "@material-ui/core";

import login_bg_png from "src/assets/bg.png";
import sample_logo_svg from "src/assets/sample_logo.svg";

import { useStyles } from "./styles";

function Copyright() {
  return (
    <Typography variant="body2" align="center" style={{ color: "white" }}>
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function LoginPage() {
  const classes = useStyles();

  let [window_height, setWindowHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      debounce(() => {
        console.log("hello resize");
        setWindowHeight(window.innerHeight);
      }, 50)
    );
  }, []);

  return (
    <>
      <Box
        className={classes.login_background}
        style={{
          backgroundImage: `url(${login_bg_png}`,
          height: window_height,

          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container component="main" maxWidth="sm">
          <div className={classes.paper}>
            {/* <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar> */}

            <Box
              style={{
                width: "89px",
                height: "89px",
                backgroundImage: `url(${sample_logo_svg})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",

                marginBottom: "3rem",
              }}
            ></Box>

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Box mb="2rem"></Box>

            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Box mb="3rem"></Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>

              <Box mb="3rem"></Box>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </Box>
    </>
  );
}
