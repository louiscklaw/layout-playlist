import React from "react";
import { makeStyles, Slide } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "150px",
    width: "100%",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
  },
  login_background: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    width: "100%",

    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  login_dialog_background: {
    width: "720px",
    height: "760px",

    background: "rgba(51, 51, 51, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxSizing: "border-box",
    boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(30px)",
    borderRadius: "30px",

    padding: "3rem",
  },
  sample_logo: {
    width: "89px",
    height: "89px",
  },
}));

export { useStyles, Transition };
