import React from "react";
import { debounce } from "lodash-es";

import { Box, Grid, makeStyles, Button, TextField } from "@material-ui/core";

import login_bg_png from "src/assets/bg.png";
import sample_logo_svg from "src/assets/sample_logo.svg";

import { useStyles } from "src/styles/index";

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
        }}
      >
        <Box className={classes.login_dialog_background}>
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="stretch"
            style={{ width: "100%", height: "100%" }}
          >
            <Grid item>
              <Grid container item xs={12} justify="center">
                <Box
                  style={{
                    width: "89px",
                    height: "89px",
                    backgroundImage: `url(${sample_logo_svg})`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></Box>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container item xs={12} justify="center">
                <Box style={{ width: "100%" }}>
                  <Grid container>
                    <Grid container item xs={12} justify="center">
                      <Box>login</Box>
                      <Box>
                        <TextField id="standard-basic" label="login" />
                      </Box>
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <Box>password</Box>
                      <Box>
                        <TextField id="standard-basic" label="password" />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container item xs={12} justify="center">
                <Button>Login</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
