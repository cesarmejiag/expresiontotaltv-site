import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { style } from "@mui/system";
import imageUrlBuilder from "@sanity/image-url";
import PropTypes from "prop-types";
import client from "../client";
import styles from "../styles/sponsor.module.css";

const builder = imageUrlBuilder(client);

export default function Sponsor({
  image,
  caption = "",
  altText = "",
  link = "",
}) {
  const src = image ? builder.image(image).url() : "";
  const cardContent = () => {
    const content =
      src.length > 0 ? (
        <CardMedia
          alt={altText}
          className={styles.image}
          component="img"
          image={src}
          sx={{ p: 2 }}
        />
      ) : (
        <Typography className={styles.text} component="div" variant="body1">
          {caption}
        </Typography>
      );

    return link ? (
      <CardActionArea
        className={styles.actionArea}
        href={link}
        component="a"
        target="_blank"
      >
        {content}
      </CardActionArea>
    ) : (
      content
    );
  };

  return <Card className={styles.sponsor}>{cardContent()}</Card>;
}

Sponsor.propTypes = {
  image: PropTypes.any,
  caption: PropTypes.string,
  altText: PropTypes.string,
  link: PropTypes.string,
};
