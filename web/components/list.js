import { useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
      <Grid container justifyContent="flex-end" spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={3}>
          <FormControl
            sx={{ backgroundColor: "#ffffff", display: "block", width: "auto" }}
            variant="outlined"
          >
            <InputLabel htmlFor="search-item">Buscar</InputLabel>
            <OutlinedInput
              fullWidth
              id="search-item"
              label="Buscar"
              type="text"
              onChange={filter}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="search" edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
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
