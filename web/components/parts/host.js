import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";

const builder = imageUrlBuilder(client);

const trimText = (text = "", length = 80) => text.substring(0, length);

export default function Host({ image, name, desc, url }) {
  const src = builder.image(image).url();
  return (
    
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={url}>
        <CardMedia component="img" height="240" image={src} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Host.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  url: PropTypes.string,
};

Host.defaultProps = {
  name: "Name",
  desc: "Description",
  url: "/",
};
