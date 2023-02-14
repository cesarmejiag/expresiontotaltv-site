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

import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import useResize from "../../hooks/useResize";

/*
{filteredItems.map((item, index) => (
          <Grid key={`Item-${index}`} item xs={12} sm={6} md={3}>
            <Item {...item} />
          </Grid>
        ))}
 */

export default function List({ items }) {
  const { device } = useResize();
  const spv = device === "desktop" ? 4 : device === "tablet" ? 3 : 1;

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

  const delay = 3000;

  return (
    <Section title="Conductores">
      {/* <Grid container justifyContent="flex-end" spacing={2} sx={{ mb: 2 }}>
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
            </Grid> */}
      <Swiper
        navigation
        autoplay={{ delay: delay * 1000, disableOnInteraction: true }}
        // className={styles.sponsors}
        loop={true}
        modules={[Autoplay, Navigation]}
        slidesPerView={spv}
        spaceBetween={16}
        style={{ padding: "10px 0!important" }}
      >
        {filteredItems.map((item) => (
          <SwiperSlide key={item._id}>
            <Host
              image={item.image}
              name={item.title}
              desc={item.intro}
              url={`/conductores/${item.slug.current}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <Grid container spacing={2}>
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
      </Grid> */}
    </Section>
  );
}
