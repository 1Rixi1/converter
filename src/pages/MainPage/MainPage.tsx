import { Container } from "@mui/material";
import { Converter } from "../../widget/Converter";
import { WishList } from "../../widget/WishList";

export const MainPage = () => {
  return (
    <Container>
      <Converter />
      <WishList />
    </Container>
  );
};
