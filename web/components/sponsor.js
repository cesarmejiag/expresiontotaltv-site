import { Card, CardMedia, Typography } from "@mui/material";
import imageUrlBuilder from "@sanity/image-url";
import PropTypes from "prop-types";
import client from "../client";

import styles from "../styles/sponsor.module.css";

const builder = imageUrlBuilder(client);

export default function Sponsor({ image, alt }) {
  let src = "";
  if (image) {
    src = builder.image(image).url();
  }
  return (
    <Card className={styles.sponsor}>
      {src.length > 0 && (
        <CardMedia
          alt={alt}
          className={styles.image}
          component="img"
          image={src}
          sx={{ p: 2 }}
        />
      )}
      {src.length <= 0 && (
        <Typography className={styles.text} component="div" variant="body1">
          Sponsor
        </Typography>
      )}
    </Card>
  );
}

Sponsor.propTypes = {
  image: PropTypes.any,
  caption: PropTypes.string,
  alt: PropTypes.string,
};

Sponsor.defaultProps = {
  caption: "",
  alt: "",
};
