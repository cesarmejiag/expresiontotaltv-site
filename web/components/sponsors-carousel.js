import PropTypes from "prop-types";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Sponsor from "./sponsor";

import styles from "./sponsors-carousel.module.css";

import "swiper/css";
import "swiper/css/navigation";

// Reference: https://swiperjs.com/react
export default function SponsorsCarousel({ items, delay }) {
  return (
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
        <SwiperSlide key={item.alt}>
          <Sponsor src={item.src} alt={item.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

SponsorsCarousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  delay: PropTypes.number,
};

SponsorsCarousel.defaultProps = {
  items: [],
  delay: 5000,
};
