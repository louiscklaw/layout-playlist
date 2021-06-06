import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    // backgroundColor: "white",
    borderRadius: "10px",
    backgroundColor: "rgba(255,255,255,0.25)",
    backdropFilter: "blur(30px)",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    padding: "3rem",

    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.25)",
    border: "1px solid rgba(255, 255, 255, 0.25)",
  },
}));

export { useStyles };
