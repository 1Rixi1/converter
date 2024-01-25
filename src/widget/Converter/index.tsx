import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { currencyService } from "../../shared/api";

import { Box, CircularProgress, Typography } from "@mui/material";
import s from "./converter.module.css";
import { AppForm, DataFormType } from "../../features/form";
import { mapConverter } from "../../entities/currency/lib/mapper";
import { convertRate } from "../../shared/util";

export const Converter = () => {
  const [resultConverter, setResultConverter] = useState<null | string>("");

  const { isLoading, data } = useQuery({
    queryKey: ["currencyRate"],
    queryFn: currencyService.getCurrency,
    select: (data) => data.data,
  });

  const onSubmitHandleForm = (currentData: DataFormType) => {
    const result = convertRate(
      currentData.input,
      data[currentData.from],
      data[currentData.to],
    );

    setResultConverter(
      `${currentData.input} ${currentData.from} = ${result.toFixed(3)} ${currentData.to}`,
    );
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box className={s.box}>
      <Typography variant={"h4"}>Конвертер Валют</Typography>
      <Box className={s.boxForm}>
        <AppForm
          data={mapConverter(data)}
          onSubmit={onSubmitHandleForm}
          buttonLabel={"Конвертировать"}
        />
      </Box>

      <Box className={s.boxResult}>
        {resultConverter && <Typography>{resultConverter}</Typography>}
      </Box>
    </Box>
  );
};
