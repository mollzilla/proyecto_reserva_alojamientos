import React, { useState } from "react";
import { FormControl } from "@material-ui/core";
// import InputLabel from "@material-ui/core/InputLabel";
import { InputLabel } from "@material-ui/core";
// import MenuItem from "@material-ui/core/MenuItem";
import { MenuItem } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";
// import Select from "@material-ui/core/Select";
// import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

function Header(props) {
  const {
    handleDateChange,
    handleFieldChange,
    since,
    until,
    today,
    tomorrow,
    price,
    country,
    size
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

  const getDateString = (since, until) => {
    if (since && until) {
      return `Desde el ${daysOfWeek[since.getDay()]} ${since.getDate()} ${
        months[since.getMonth()]
      } de ${since.getFullYear()} hasta  el ${
        daysOfWeek[until.getDay()]
      } ${until.getDate()} de ${
        months[until.getMonth()]
      } de ${until.getFullYear()}`;
    } else if (since) {
      return `Desde el ${daysOfWeek[since.getDay()]} ${since.getDate()} ${
        months[since.getMonth()]
      } de ${since.getFullYear()} hasta  el ${
        daysOfWeek[since.getDay()]
      } ${since.getDate()} de ${
        months[since.getMonth()]
      } de ${since.getFullYear()}`;
    } else {
      return `Cualquier fecha`;
    }
  };

  const getDateValue = (date) => {
    return date === "" ? "" : date.toISOString().substr(0, 10);
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
            style={{ fill: "white" }}
            variant="outlined"
            id="since"
            name="since"
            type="date"
            inputProps={
              ({ min: getDateValue(today) },
              { style: { backgroundColor: "white" } })
            }
            className={"date-picker"}
            InputLabelProps={{
              shrink: true
            }}
            format="dd/MM/YYYY"
            margin="dense"
            // value={since.toISOString().substring(0, 10)}
            value={getDateValue(since)}
            onChange={(e) => {
              handleDateChange("since", `${e.target.value}T00:00:00-03:00`);
            }}
          />

          <TextField
            style={{ fill: "white" }}
            variant="outlined"
            id="until"
            name="until"
            type="date"
            inputProps={
              ({
                min: since === "" ? getDateValue(today) : getDateValue(since)
              },
              { style: { backgroundColor: "white" } })
            } // pasarlo a tomorrow
            className={"date-picker"}
            InputLabelProps={{
              shrink: true
              // className: 'date-picker'
            }}
            format="dd/MM/yyyy"
            margin="dense"
            value={getDateValue(until)}
            onChange={(e) => {
              handleDateChange("until", `${e.target.value}T00:00:00-03:00`);
            }}
          />

          <FormControl className="country-picker" margin="dense">
            <Select
              style={{ backgroundColor: "white" }}
              variant="outlined"
              margin="dense"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              displayEmpty={true}
              defaultValue={"any"}
              value={country}
              onChange={(e) => {
                handleFieldChange("country", e.target.value);
              }}
            >
              <MenuItem value={"any"}>Todos los países</MenuItem>
              <MenuItem value={"Argentina"}>Argentina</MenuItem>
              <MenuItem value={"Uruguay"}>Uruguay</MenuItem>
              <MenuItem value={"Brasil"}>Brasil</MenuItem>
              <MenuItem value={"Chile"}>Chile</MenuItem>
            </Select>
          </FormControl>

          <FormControl className="country-picker" margin="dense">
            <Select
              style={{ backgroundColor: "white" }}
              variant="outlined"
              margin="dense"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              displayEmpty={true}
              defaultValue={"any"}
              value={price}
              onChange={(e) => handleFieldChange("price", e.target.value)}
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
              style={{ backgroundColor: "white" }}
              variant="outlined"
              margin="dense"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              displayEmpty={true}
              defaultValue={"any"}
              value={size}
              onChange={(e) => handleFieldChange("size", e.target.value)}
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
