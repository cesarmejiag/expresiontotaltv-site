import Link from "next/link";
import { Box, Container, Grid } from "@mui/material";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
              <div>Expresión Total TV</div>
              <div>Todos los derechos reservados</div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: { xs: "center", sm: "right" } }}>
              <Link href="/">Aviso de privacidad</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
