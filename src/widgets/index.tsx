import { useQuery } from "@tanstack/react-query";
import { currencyService } from "../shared/api";
import { Box, CircularProgress, Typography } from "@mui/material";

export const Converter = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["converter"],
    queryFn: currencyService.getCurrency,
    select: (data) => data.data,
  });

  if (isLoading) {
    return <CircularProgress />;
  }
  console.log(data);
  return (
    <Box>
      <Typography variant={"h2"}>Конвертер Валют</Typography>
      <Box></Box>
    </Box>
  );
};
