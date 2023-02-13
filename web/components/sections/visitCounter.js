import { useContext } from "react";
import { Globals } from "@/context/context";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Counter from "../objects/counter";

export default function VisitCounter({ title }) {
  const { globals } = useContext(Globals);
  return (
    <Container sx={{ py: 2 }}>
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "300px",
          width: "100%",
        }}
      >
        <Card>
          <CardContent>
            <Typography align="center" component="div">
              <VisibilityIcon fontSize="large" />
            </Typography>
            <Typography
              align="center"
              component="div"
              variant="h4"
              sx={{ letterSpacing: "5px" }}
            >
              <Counter to={globals?.visitCount || 0} refreshInterval={50} />
            </Typography>
            <Typography align="center" component="div" variant="caption">
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
