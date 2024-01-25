import { Box } from "@mui/material";
import { WishCard } from "../wishCard";
import { convertRate } from "../../util";
import { WishListType } from "../../types/wish-type";
import { RateType } from "../../types/data-type";

type Props = {
  data: RateType;
  items: WishListType[];
};
export const WishItems = ({ data, items }: Props) => {
  return (
    <Box>
      {items.map((el, idx) => {
        const result = convertRate(
          el.input,
          `${data[el.from]}`,
          `${data[el.to]}`,
        );
        console.log(el);
        return (
          <WishCard
            key={idx}
            title={el.wishName}
            initialPrice={`${el.input} ${el.from}`}
            priceInfo={`${el.input} ${el.from} = ${result} ${el.to}`}
          />
        );
      })}
    </Box>
  );
};
