import { Container, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./section.module.css";

export default function Section({ title, intro, bgColor, children }) {
  return (
    <div className={styles.section} style={{ backgroundColor: bgColor }}>
      <Container maxWidth="lg" sx={{ py: { xs: 5, sm: 9 } }}>
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
