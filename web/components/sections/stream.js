import { Card, CardMedia, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Section from "../section";
import Sponsor from "../sponsor";

import styles from "../../styles/sections/stream.module.css";

export default function Stream({ src, sponsors }) {
  return (
    <Section>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <Card className={styles.video}>
            {src.length > 0 && false && (
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
              <Typography
                className={styles.text}
                component="div"
                variant="body1"
              >
                No stream available.
              </Typography>
            )}
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Grid container spacing={2}>
            {sponsors.map(({ _key, mainImage, altText }) => (
              <Grid key={_key} item xs={12}>
                <Sponsor image={mainImage} alt={altText} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
}

Stream.propType = {
  src: PropTypes.string,
  sponsors: PropTypes.arrayOf(PropTypes.any),
};

Stream.defaultProps = {
  src: "",
  sponsors: [],
};
