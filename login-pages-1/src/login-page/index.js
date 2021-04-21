import React from "react";
import { debounce } from "lodash-es";

import { Box } from "@material-ui/core";

import login_bg_png from "src/assets/bg.png";

export default function LoginPage() {
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
        style={{
          backgroundImage: `url(${login_bg_png}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: window_height,
        }}
      >
        LoginPage
      </Box>
    </>
  );
}
