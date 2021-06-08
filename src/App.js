import useAxios from "./useAxios";
import React from "react";
import {
  Paper,
  Backdrop,
  Typography,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import ImgCardsGrid from "./ImgCardsGrid";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 345,
    width: "200px",
    display: "inline-block",
    padding: 5,
    margin: 2,
    borderRadius: "3px",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  title: {
    textAlign: "center",
    height: "10vh",
    paddingTop: 10,
  },
}));

function App() {
  //custom react hook for simple axios get request
  const [response, error, loading] = useAxios({
    url: "https://picsum.photos/v2/list",
  });
  const classes = useStyles();
  return (
    <Paper>
      {/* displays loading spinner as api calls are being made */}
      {loading && (
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Typography
        gutterBottom
        id="dot-ai-title"
        variant="h2"
        component="h2"
        className={classes.title}
      >
        Dot Ai App
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          height: "86vh",
          overflow: "scroll",
        }}
      >
        {/* displays img grid if data returns from api or error message to end user if api returns error */}
        {!loading && !error ? (
          <ImgCardsGrid response={response} />
        ) : error ? (
          <p>Sorry there seams to be somthing wrong please try again later</p>
        ) : null}
      </div>
    </Paper>
  );
}

export default App;
