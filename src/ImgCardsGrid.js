import React, { useState } from "react";
import ImgModal from "./ImgModal";
import MediaCard from "./MediaCard";
import PropTypes from "prop-types";

const ImgCardsGrid = ({ response }) => {
  //state for model
  const [open, setOpen] = useState(false);
  //keeping track of the selected image
  const [selectedImg, setSelectedImg] = useState({});
  //image selecton and model toggleing function
  const handleClick = (image) => {
    setOpen(true);
    setSelectedImg(image);
  };

  return (
    <>
      <ImgModal open={open} setOpen={setOpen} selectedImg={selectedImg} />
      {response?.map((image) => {
        return (
          <MediaCard
            key={image.id}
            image={image}
            imgWidth={"300px"}
            imgHeight={"300px"}
            onClick={() => handleClick(image)}
          />
        );
      })}
    </>
  );
};

ImgCardsGrid.propTypes = {
  response: PropTypes.array.isRequired,
};

export default ImgCardsGrid;
