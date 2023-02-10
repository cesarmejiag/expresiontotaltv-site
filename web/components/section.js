import { Container, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import styles from "../styles/section.module.css";

const getBgColorStyle = (bgColor) => {
  if (!bgColor || typeof bgColor !== "object") {
    return {};
  }
  const { r, g, b, a } = bgColor;
  return { backgroundColor: `rgba(${r},${g},${b},${a})` };
};

export default function Section({ title, intro, bgColor, children }) {
  const bgColorStyle = getBgColorStyle(bgColor?.rgb);
  return (
    <div className={styles.section} style={{ ...bgColorStyle }}>
      <Container maxWidth="lg" sx={{ py: { xs: 3, sm: 5 } }}>
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
  bgColor: PropTypes.object,
  children: PropTypes.any,
};
