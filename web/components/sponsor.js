import { Card, CardMedia, Typography } from "@mui/material";
import PropTypes from "prop-types";

import styles from "sponsor.module.css";

export default function Sponsor({ src, alt }) {
  return (
    <Card className={styles.sponsor}>
      {src.length > 0 && (
        <CardMedia
          alt={alt}
          className={styles.image}
          component="img"
          src={src}
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
  src: PropTypes.string,
  alt: PropTypes.string,
};

Sponsor.defaultProps = {
  src: "",
  alt: "",
};
