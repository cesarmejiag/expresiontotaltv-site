import Image from "next/image";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import imageUrlBuilder from "@sanity/image-url";
import Section from "../section";
import client from "@/client";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import useResize from "@/hooks/useResize";

const builder = imageUrlBuilder(client);

export default function Gallery({ title, images }) {
  const { device } = useResize();
  const spv = device === "desktop" ? 3 : device === "tablet" ? 3 : 2;

  return (
    <Section title={title}>
      <ImageList cols={spv} gap={8}>
        {images.map(({ _key, asset, alt, caption }) => (
          <ImageListItem key={_key}>
            <img alt={alt} src={builder.image(asset).url()} loading="lazy" />
            <ImageListItemBar
              title={caption}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${caption}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Section>
  );
}
