import React from "react";
import MediaCard from "./MediaCard";
import { Button, Fade, Backdrop, Modal, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: { height: "40px", width: "300px" },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 20,
  },
}));

const ImgModal = ({ open, setOpen, selectedImg }) => {
  const classes = useStyles();
  const { author } = selectedImg;

  return (
    <div>
      <Modal
        aria-labelledby={`modal-of-img-by-${author}`}
        aria-describedby={`modal-of-img-by-${author}`}
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="img-modal-title">{`Image presented by ${author}`}</h2>

            <MediaCard
              image={selectedImg}
              imgWidth={"600px"}
              imgHeight={"700px"}
            />
            <div className={classes.buttonContainer}>
              <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                onClick={() => setOpen(false)}
                id="clear-button"
              >
                Clear
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

ImgModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  selectedImg: PropTypes.object,
};

export default ImgModal;
