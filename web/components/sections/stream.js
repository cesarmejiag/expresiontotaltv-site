import { Card, CardMedia, Typography } from "@mui/material";
import PropTypes from "prop-types";

import styles from "../video.module.css";

export default function Stream({ url: src }) {
  return (
    <Card className={styles.video}>
      {src.length > 0 && (
        <CardMedia
          className={styles.iframe}
          component="iframe"
          src={src}
          title="Afreeca TV"
          sx={{
            padding: 2,
          }}
        />
      )}
      {src.length <= 0 && (
        <Typography className={styles.text} component="div" variant="body1">
          No stream available.
        </Typography>
      )}
    </Card>
  );
}

Stream.propType = {
  src: PropTypes.string,
};

Stream.defaultProps = {
  src: "",
};
