import { Container, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import styles from "../styles/section.module.css";

export default function Section({ title, intro, bgColor, type, children }) {
  const mySx = type ? { pt: { xs: 3, sm: 3 } } : { py: { xs: 5, sm: 7 } };

  return (
    <div className={styles.section} style={{ backgroundColor: bgColor }}>
      <Container maxWidth="lg" sx={mySx}>
        {(title || intro) && (
          <Grid className="header" sx={{ mb: { xs: 3, sm: 4 } }}>
            {title && (
              <Typography component="h1" variant="h3">
                {title}
              </Typography>
            )}
            {intro && <Typography component="div">{intro}</Typography>}
          </Grid>
        )}
        <Grid className="body">{children}</Grid>
      </Container>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.any,
};

Section.defaultProps = {
  bgColor: "transparent",
};
