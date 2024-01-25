import { ChangeEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";

import { AppForm, DataFormType } from "../../features/form";
import { currencyService } from "../../shared/api";
import { Modal } from "../../shared/ui/modal";
import { useInputState } from "../../shared/util";
import { mapConverter } from "../../entities/currency/lib/mapper";
import { useWishState } from "../../entities/wish";
import { WishItems } from "../../shared/ui/wishList";

export const WishList = () => {
  const [isOpen, setIsOpen] = useState(true);

  const { value, setValue, error, setError } = useInputState();

  const { wishList, saveItem } = useWishState();

  const { data, isLoading } = useQuery({
    queryKey: ["currencyRate"],
    queryFn: currencyService.getCurrency,
    select: (data) => data.data,
  });

  const onSubmit = (currentData: DataFormType) => {
    if (!value) return setError(true);

    saveItem({
      ...currentData,
      wishName: value,
    });
    return setIsOpen(false);
  };

  const onClickAddWishHandler = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.currentTarget.value;
    if (targetValue) {
      setError(false);
    }
    setValue(targetValue);
  };

  if (isLoading) return <CircularProgress />;

  return (
    <Box>
      <Typography variant={"h4"}>WishList</Typography>

      <Button variant={"outlined"} onClick={onClickAddWishHandler}>
        Добавить желание
      </Button>

      <WishItems data={data} items={wishList} />

      <Modal isOpen={isOpen} onClose={onCloseModal} title={"Опишите желание"}>
        <TextField
          label={"Название мечты"}
          type={"text"}
          value={value}
          error={error}
          onChange={onChangeValue}
          helperText={error && "Обязательное поле"}
        />
        <AppForm
          data={mapConverter(data)}
          onSubmit={onSubmit}
          buttonLabel={"Сохранить"}
        />
      </Modal>
    </Box>
  );
};
