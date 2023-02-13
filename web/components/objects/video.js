import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function Video({ title, image, desc, url, onClick }) {
  const handleClick = (e) => {
    onClick({ title, desc, url });
  };

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography>{title}</Typography>
          <Typography>{desc}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
