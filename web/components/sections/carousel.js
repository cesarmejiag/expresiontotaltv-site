import PropTypes from "prop-types";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Sponsor from "../sponsor";
import Section from "../section";

import styles from "../../styles/sections/carousel.module.css";

import "swiper/css";
import "swiper/css/navigation";

// Reference: https://swiperjs.com/react
export default function Carousel({ items, delay }) {
  return (
    <Section bgColor="#ffffff">
      <Swiper
        navigation
        autoplay={{ delay: delay, disableOnInteraction: true }}
        className={styles.sponsors}
        loop={true}
        modules={[Autoplay, Navigation]}
        slidesPerView={4}
        spaceBetween={16}
      >
        {items.map((item) => (
          <SwiperSlide key={item._key}>
            <Sponsor image={item.mainImage} alt={item.altText} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  delay: PropTypes.number,
};

Carousel.defaultProps = {
  items: [],
  delay: 5000,
};
