import PropTypes from "prop-types";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Sponsor from "../sponsor";
import Section from "../section";

import styles from "../../styles/sections/carousel.module.css";

import "swiper/css";
import "swiper/css/navigation";
import useResize from "../../hooks/useResize";

// Reference: https://swiperjs.com/react
export default function Carousel({ delay, items }) {
  const { device } = useResize();
  const spv = device === "desktop" ? 4 : device === "tablet" ? 3 : 1;

  return (
    <Section bgColor="#ffffff">
      <Swiper
        navigation
        autoplay={{ delay: delay * 1000, disableOnInteraction: true }}
        className={styles.sponsors}
        loop={true}
        modules={[Autoplay, Navigation]}
        slidesPerView={spv}
        spaceBetween={16}
      >
        {items.map((item) => (
          <SwiperSlide key={item._key}>
            <Sponsor
              image={item.mainImage}
              altText={item.altText}
              caption={item.caption}
              link={item.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}

Carousel.propTypes = {
  autoplay: PropTypes.bool,
  delay: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.object),
};

Carousel.defaultProps = {
  autoplay: false,
  delay: 3,
  items: [],
};
