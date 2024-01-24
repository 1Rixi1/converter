import {MenuItem, TextField} from "@mui/material";
import {DomainDataType} from "../../shared/types/data-type";
import {ChangeEvent} from "react";

import s from './converterForm.module.css'


type Props = {
  id: string
  name: string
  domainData: DomainDataType,
  onChange: (value: string) => void
}

export const ConverterForm = ({id, name, domainData, onChange}: Props) => {


  const onChangeRateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    return onChange(e.target.value)
  }

  return (
    <TextField
      id={id}
      label={name}
      name={name}
      select
      defaultValue="EUR"
      color={'info'}
      onChange={onChangeRateHandler}
      className={s.input}
      required
    >
      {domainData.map(el => {
        return (
          <MenuItem key={el.value} value={el.value}>
            {el.label}
          </MenuItem>
        )
      })}
    </TextField>


  );
};

