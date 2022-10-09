import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Link as RouterLink } from "react-router-dom";
import { CardActionArea } from "@mui/material";

export type IEntryCardProps = {
  cardHeader: {
    avatar?: string;
    title: string;
    subheader?: string;
  };
  image: {
      url:string,
      alt:string
  };
  content?: string;
  link: string;
};

const EntryCard: React.FC<IEntryCardProps> = ({
  cardHeader,
  image,
  content,
  link
}) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea component={RouterLink} to={link}>
        <CardHeader
          avatar={
            cardHeader.avatar ? (
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {cardHeader.avatar}
              </Avatar>
            ) : (
              ""
            )
          }
          title={cardHeader.title}
          subheader={cardHeader.subheader || ""}
        />
      </CardActionArea>
      <CardMedia component="img" height="194" image={image.url} alt={image.alt} />
      {content && (
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default EntryCard;
