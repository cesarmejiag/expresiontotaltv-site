import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import styles from "../styles/figure.module.css";
import client from "../client";

const builder = imageUrlBuilder(client);

// TODO: Fix here
export default function Figure({ alt, caption, asset }) {
  return <div>Here goes an image</div>;
  /* return asset ? (
    <figure className={styles.content}>
      <img
        alt={alt}
        className={styles.image}
        src={builder.image(asset).auto("format").width(2000).url()}
      />
      {caption && (
        <figcaption>
          <div className={styles.caption}>
            <div className={styles.captionBox}>
              <p>{caption}</p>
            </div>
          </div>
        </figcaption>
      )}
    </figure>
  ) : undefined; */
}

Figure.propTypes = {
  node: PropTypes.shape({
    alt: PropTypes.string,
    caption: PropTypes.string,
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
};
