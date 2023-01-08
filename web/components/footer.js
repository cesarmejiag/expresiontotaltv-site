import PropTypes from "prop-types";
import { Box, Container, Grid } from "@mui/material";
import Link from "next/link";
import { useRouter, withRouter } from "next/router";
import styles from "./footer.module.css";
import SimpleBlockContent from "./simple-block-content";

function Footer({ navItems, text }) {
  const { pathname, query } = useRouter();
  return (
    <div className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
              <SimpleBlockContent blocks={text} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: { xs: "center", sm: "right" } }}>
              {navItems &&
                navItems.map((item) => {
                  /* const isActive =
                    pathname === "/" && query.slug === item.slug.current; */
                  return (
                    <Link
                      href={{
                        pathname: "/",
                        query: { slug: item.slug.current },
                      }}
                      as={`/${item.slug.current}`}
                      prefetch
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
