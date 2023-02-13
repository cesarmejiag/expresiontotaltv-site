import Video from "../objects/video";
import Section from "../section";
import { urlFor } from "@/lib/api";
import { Box, Card, CardMedia, Grid, Modal, Typography } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 800,
  width: "95%",
  bgcolor: "#fff",
  boxShadow: 24,
  p: 2,
  borderRadius: 1,
};

export default function Videos({ title, intro, items }) {
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState(null);
  const handleClose = () => {
    setVideo(null);
    setOpen(false);
  };
  const handleOpen = (video) => {
    setVideo(video);
    setOpen(true);
  };

  return (
    <Section title={title} intro={intro}>
      <Grid container spacing={2}>
        {items.map(({ _key, title, image, desc, url }) => (
          <Grid item key={_key} xs={12} sm={4} md={3}>
            <Video
              title={title}
              image={image ? urlFor(image).url() : undefined}
              desc={desc}
              url={url}
              onClick={handleOpen}
            />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open && video}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card sx={{ mb: 2 }}>
            <CardMedia component="video" src={video?.url} controls={true} />
          </Card>
          <Typography component="h5" variant="h5">
            {video?.title}
          </Typography>
          <Typography component="div" variant="body2">
            {video?.desc}
          </Typography>
        </Box>
      </Modal>
    </Section>
  );
}
