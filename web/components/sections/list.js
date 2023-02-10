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
import Host from "../parts/host";
import Section from "../section";

/*
{filteredItems.map((item, index) => (
          <Grid key={`Item-${index}`} item xs={12} sm={6} md={3}>
            <Item {...item} />
          </Grid>
        ))}
 */

export default function List({ items }) {
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
    <Section title="Conductores">
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
        {filteredItems.map((item) => (
          <Grid key={item.slug.current} item xs={12} sm={6} md={3}>
            <Host
              image={item.image}
              name={item.title}
              desc={item.intro}
              url={`/conductores/${item.slug.current}`}
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
