import React, { useState } from "react";
import { FormControl } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

function Header(props) {
  const {
    handleDateChange,
    handleCountryChange,
    handlePriceChange,
    handleSizeChange,
    since,
    until,
    today,
    price,
    country
  } = props;

  const daysOfWeek = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
  ];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  const hoy = new Date().toLocaleDateString().substring(0, 10);

  const getDateString = (since, until) => {
    if (since && until) {
      console.log(since, until);
      return `Desde el ${daysOfWeek[since.getDay()]} ${since.getDate()} ${
        months[since.getMonth()]
      } de ${since.getFullYear()} hasta  el ${
        daysOfWeek[until.getDay()]
      } ${until.getDate()} de ${
        months[until.getMonth()]
      } de ${until.getFullYear()}`;
    } else if (since) {
      console.log(since, until);
      return `Desde el ${daysOfWeek[since.getDay()]} ${since.getDate()} ${
        months[since.getMonth()]
      } de ${since.getFullYear()} hasta  el ${
        daysOfWeek[since.getDay()]
      } ${since.getDate()} de ${
        months[since.getMonth()]
      } de ${since.getFullYear()}`;
    } else {
      console.log(since, until);
      return `Cualquier fecha`;
    }
  };

  return (
    <header>
      <Box className="header" color="white" bgcolor="#01d0b1">
        <h1>Hoteles</h1>
        <h3>{getDateString(since, until)}</h3>
      </Box>
      <Box className="params-header" color="white" bgcolor="#209CEE">
        <form className="params-form" noValidate>
          <TextField
            id="since"
            type="date"
            inputProps={{ min: since.toISOString().substring(0, 10) }}
            defaultValue={today}
            className={"date-picker"}
            InputLabelProps={{
              shrink: true
            }}
            format="dd/MM/YYYY"
            margin="dense"
            // value={selectedDate}
            onChange={(e) => {
              handleDateChange("since", `${e.target.value}T00:00:00-03:00`);
            }}
          />

          <TextField
            id="until"
            type="date"
            inputProps={{ min: since.toISOString().substring(0, 10) }}
            // defaultValue={pickedSince}
            className={"date-picker"}
            InputLabelProps={{
              shrink: true
              // className: 'date-picker'
            }}
            format="dd/MM/yyyy"
            margin="dense"
            // value={pickedSince}
            onChange={(e) => {
              handleDateChange("until", `${e.target.value}T00:00:00-03:00`);
            }}
          />

          <FormControl className="country-picker" margin="dense">
            <Select
              margin="dense"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              displayEmpty={true}
              defaultValue={"any"}
              value={country}
              onChange={(e) => {
                handleCountryChange(e.target.value);
              }}
            >
              <MenuItem value={"any"}>Todos los países</MenuItem>
              <MenuItem value={10}>Argentina</MenuItem>
              <MenuItem value={20}>Uruguay</MenuItem>
              <MenuItem value={30}>Brasil</MenuItem>
            </Select>
          </FormControl>

          <FormControl className="country-picker" margin="dense">
            <Select
              margin="dense"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              displayEmpty={true}
              defaultValue={"any"}
              value={price}
              onChange={(e) => handlePriceChange(e.target.value)}
            >
              <MenuItem value={"any"}>Cualquier Precio</MenuItem>
              <MenuItem value={1}>
                <AttachMoneyIcon className="money" fontSize="small" />{" "}
              </MenuItem>
              <MenuItem value={2}>
                <AttachMoneyIcon className="money" fontSize="small" />
                <AttachMoneyIcon className="money" fontSize="small" />
              </MenuItem>
              <MenuItem value={3}>
                <AttachMoneyIcon className="money" fontSize="small" />
                <AttachMoneyIcon className="money" fontSize="small" />
                <AttachMoneyIcon className="money" fontSize="small" />
              </MenuItem>
              <MenuItem value={4}>
                <AttachMoneyIcon className="money" fontSize="small" />
                <AttachMoneyIcon className="money" fontSize="small" />
                <AttachMoneyIcon className="money" fontSize="small" />
                <AttachMoneyIcon className="money" fontSize="small" />
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl className="price-picker" margin="dense">
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
              margin="dense"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              displayEmpty={true}
              defaultValue={"any"}
              onChange={(e) => handleSizeChange(e.target.value)}
            >
              <MenuItem value={"any"}>Cualquier tamaño</MenuItem>
              <MenuItem value={"small"}>Pequeño</MenuItem>
              <MenuItem value={"medium"}>Mediano</MenuItem>
              <MenuItem value={"large"}>Grande</MenuItem>
            </Select>
          </FormControl>
        </form>
      </Box>
    </header>
  );
}

export default Header;
