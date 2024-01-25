import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

type Props = {
  title: string;
  initialPrice: string;
  priceInfo: string;
};

export const WishCard = ({ title, initialPrice, priceInfo }: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {initialPrice}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {priceInfo}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
