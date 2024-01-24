import {useQuery} from "@tanstack/react-query";
import {currencyService} from "../../shared/api";
import {Box, Button, CircularProgress, Typography} from "@mui/material";
import {ConverterForm} from "../../features/ConverterForm";
import {mapConverter} from "./lib/mapper.ts";

import s from './converter.module.css'
import {CountInput} from "../../features/CountInput";
import {ChangeEvent} from "react";

export const Converter = () => {
  const {isLoading, data} = useQuery({
    queryKey: ['currencyRate'],
    queryFn: currencyService.getCurrency,
    select: (data) => data.data
  })


  if (isLoading) {
    return (
      <CircularProgress/>
    )
  }

  const onSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    console.log({
      from: formData.get('from'),
      to: formData.get('to'),
      count: formData.get('count')
    })

  }

  const onCountChange = (value: string) => {
    console.log(value)
  }

  const onFromChange = (value: string) => {
    console.log(value)
  }
  const onToChange = (value: string) => {
    console.log(value)
  }

  return (
    <Box>
      <Typography variant={'h4'}>Converter</Typography>
      <Box>
        <Box className={s.boxForm} component={'form'} autoComplete={'off'} onSubmit={onSubmitHandler}>
          <CountInput onChange={onCountChange} label={'current-count'} id={'current-count-id'} name={'count'}/>
          <ConverterForm domainData={mapConverter(data)} onChange={onFromChange} id={'converter-form-id'}
                         name={'from'}/>
          <ConverterForm domainData={mapConverter(data)} onChange={onToChange} id={'converter-form-id'}
                         name={'to'}/>

          <Button className={s.button} variant={'contained'} type={'submit'}>Конвертировать</Button>

        </Box>
      </Box>
    </Box>
  )

}