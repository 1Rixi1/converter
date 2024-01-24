import {TextField} from "@mui/material";
import {ChangeEvent} from "react";

import s from './countInput.module.css'

type Props = {
  id: string
  label: string
  name: string
  onChange: (value: string) => void
}

export const CountInput = ({id, label, name, onChange}: Props) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

    return onChange(e.target.value)
  }

  return (
    <TextField
      className={s.input}
      id={id}
      label={label}
      name={name}
      type="number"
      onChange={onChangeHandler}
    />
  );
};

