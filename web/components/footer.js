import PropTypes from "prop-types";
import { Box, Container, Grid } from "@mui/material";
import { useRouter, withRouter } from "next/router";
import Link from "next/link";
// import SimpleBlockContent from "./simple-block-content";
import styles from "../styles/footer.module.css";

function Footer({ navItems, text }) {
  const { pathname, query } = useRouter();
  return (
    <div className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
              <p>Expresión Total TV</p>
              <p>Todos los derechos reservados</p>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: { xs: "center", sm: "right" } }}>
              {navItems &&
                navItems.map(({ _id, slug }) => {
                  const isActive =
                    pathname === "/" && query.slug === slug.current;
                  return (
                    <Link
                      key={`footer-${_id}`}
                      href={{
                        pathname: "/landing",
                        query: { slug: slug.current },
                      }}
                      as={`/${slug.current}`}
                    >
                      Aviso de privacidad
                    </Link>
                  );
                })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Footer.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.shape({
        current: PropTypes.string,
      }).isRequired,
    })
  ),
  text: PropTypes.arrayOf(PropTypes.object),
};

export default withRouter(Footer);
