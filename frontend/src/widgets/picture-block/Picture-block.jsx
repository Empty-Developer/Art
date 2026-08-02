import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import pictureOne from "../../entities/img/pictureone.png";
import pictureTwo from "../../entities/img/picturetwo.png";
import pictureTree from "../../entities/img/picturetree.png";
export default function Picture() {
  const itemData = [
    {
      img: pictureOne,
    },
    {
      img: pictureTree,
    },
  ];

  return (
    <>
      <ImageList sx={{ width: "100%", height: "100%" }} cols={2} rowHeight={500}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
