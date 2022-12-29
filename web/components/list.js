import { useState } from "react";
import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";

export default function List({ items, component: Item }) {
  const [filteredItems, setFilteredItems] = useState(items);
  const filter = ({ target }) => {
    if (target.value.length > 0) {
      setFilteredItems(
        items.filter((item) => {
          const regexp = new RegExp(target.value, "ig");
          return regexp.test(item.name);
        })
      );
    } else {
      setFilteredItems(items);
    }
  };

  return (
    <div>
      <Box>
        <TextField
          id="list-search"
          label="Buscar Conductor"
          variant="outlined"
          onChange={filter}
        />
      </Box>
      <Grid container spacing={2}>
        {filteredItems.map((item, index) => (
          <Grid key={`Item-${index}`} item xs={12} sm={6} md={3}>
            <Item {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
