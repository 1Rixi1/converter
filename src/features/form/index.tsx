import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";
import { ConverterForm } from "./ConverterForm";
import { DomainDataType } from "../../shared/types/data-type";

import s from "./appForm.module.css";

export type DataFormType = {
  input: string;
  from: string;
  to: string;
};

type Props = {
  data: DomainDataType;
  buttonLabel: string;
  onSubmit: (data: DataFormType) => void;
};

export const AppForm = ({ data, buttonLabel, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataFormType>();

  const handleSubmitForm = (data: DataFormType) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Box className={s.box}>
        <TextField
          {...register("input", { required: true })}
          error={!!errors["input"]}
          helperText={errors["input"] ? "Обязательное поле" : null}
          label={"Сумма"}
          type={"number"}
        />

        <ConverterForm
          register={{ ...register("from") }}
          label={"ИЗ"}
          domainData={data}
        />
        <ConverterForm
          register={{ ...register("to") }}
          label={"В"}
          domainData={data}
        />

        <Button variant={"contained"} type="submit">
          {buttonLabel}
        </Button>
      </Box>
    </form>
  );
};
