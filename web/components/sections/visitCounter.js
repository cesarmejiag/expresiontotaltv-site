import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Section from "../section";

const padZero = (number) => {
  if (!isNaN(number)) {
    return `00${number}`.slice(-7);
  }
  return number;
};

export default function VisitCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const data = await fetch("/api/counter");
        const json = await data.json();
        if (json.success) {
          setCount(json.count);
        }
      } catch (err) {
        console.log(`Counter: Can't retrieve count from server.\n${err}`);
      }
    })();
  }, []);

  return (
    <Section>
      <Box sx={{ margin: "0 auto", maxWidth: "300px", p: 2, width: "100%" }}>
        <Typography align="center" component="div" variant="h6">
          Visitors
        </Typography>
        <Typography
          align="center"
          component="div"
          variant="h6"
          sx={{ letterSpacing: "10px" }}
        >
          {padZero(count)}
        </Typography>
      </Box>
    </Section>
  );
}
