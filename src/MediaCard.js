import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    minWidth: 345,
    maxWidth: "1400px",
    display: "inline-block",
    padding: 5,
    margin: 2,
    borderRadius: "3px",
  },
});

const MediaCard = ({ image, onClick, imgWidth, imgHeight }) => {
  const classes = useStyles();

  const { author, download_url, id } = image;

  return (
    <>
      <Card
        className={classes.root}
        style={{ width: imgWidth }}
        key={id}
        onClick={onClick}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt={`Imaged by ${author}`}
            height={imgHeight}
            image={download_url}
            title={`Imaged by ${author}`}
          />
        </CardActionArea>
      </Card>
    </>
  );
};

MediaCard.defaultProps = {
  imgWidth: "300px",
  imgHeight: "300px",
  onClick: () => null,
};

MediaCard.propTypes = {
  imgWidth: PropTypes.string,
  imgHeight: PropTypes.string,
  onClick: PropTypes.func,
  image: PropTypes.object.isRequired,
};

export default MediaCard;
