import { RateType } from "../../../../shared/types/data-type";

export const mapConverter = (data: RateType) => {
  return Object.keys(data).map((el) => ({
    value: el,
    label: el,
  }));
};
