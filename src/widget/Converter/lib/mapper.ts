import {DataType} from "../../../shared/types/data-type";

export const mapConverter = (data: DataType) => {
  return Object.keys(data).map(el => ({
    value: el,
    label: el
  }))
}