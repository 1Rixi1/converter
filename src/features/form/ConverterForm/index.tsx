import { MenuItem, TextField } from "@mui/material";
import { DomainDataType } from "../../../shared/types/data-type";
import { UseFormRegister } from "react-hook-form";
import { DataFormType } from "../index.tsx";

type Props = {
  label: string;
  domainData: DomainDataType;
  register: ReturnType<UseFormRegister<DataFormType>>;
};

export const ConverterForm = ({ domainData, label, register }: Props) => {
  return (
    <TextField
      {...register}
      label={label}
      select
      defaultValue="EUR"
      color={"info"}
      required
    >
      {domainData.map((el) => {
        return (
          <MenuItem key={el.value} value={el.value}>
            {el.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
};
