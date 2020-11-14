import React from "react";
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { Box } from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import InputIcon from "@material-ui/icons/Input";
import { esLocale } from "date-fns/locale/";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import addDays from "date-fns/addDays";
import { setHours } from "date-fns";
import { es } from "date-fns/locale";
import { ParseDate } from "date-fns";
import { format } from "date-fns";

// var setHours = require("date-fns/set_hours");

function Header(props) {
  const {
    handleDateChange,
    handleFieldChange,
    since,
    until,
    price,
    country,
    size
  } = props;

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const getDateString = (since, until) => {
    if (since && until) {
      return `desde el ${since.toLocaleDateString(
        "es-ES",
        options
      )} hasta el ${until.toLocaleDateString("es-ES", options)}`;
    } else {
      return `en cualquier fecha`;
    }
  };

  const getSizeString = () => {
    console.log(size);
    return size === "any" ? "de cualquier tamaño" : `de tamaño ${size}`;
  };

  const getCountryString = () => {
    return `en ${country === "any" ? "cualquier país" : country}`;
  };

  const getPriceString = () => {
    switch (price) {
      case 1:
        return "económico";
      case 2:
        return "mediano";
      case 3:
        return "costoso";
      case 4:
        return "muy costoso";
      default:
        return "de cualquier precio";
    }
  };

  return (
    <header>
      <Box className="header" color="white" bgcolor="#01d0b1">
        <h1>Hoteles</h1>
        <h3>
          Hoteles {getDateString(since, until)} {getSizeString()}{" "}
          {getCountryString()}
        </h3>
      </Box>
      <Box className="params-header" color="white" bgcolor="#209CEE">
        <form className="params-form" noValidate>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
            <div className="input-outline">
              <i className="material-icons">output</i>
              <InputIcon
                color="disabled"
                className="in-out-icon"
                fontSize="large"
              />
              <DatePicker
                className="date-picker"
                locale="es"
                autoOk
                disablePast
                format="dd/MM/yyyy"
                emptyLabel="Cualquier fecha"
                value={since}
                onChange={(date) => {
                  // setDate(new Date(date).setHours(0,0,0,0))
                  // console.log(date);
                  handleDateChange("since", setHours(date, 0));
                  // handleChange(date); //`${date}T00:00:00-03:00`);
                }}
              />
            </div>

            <div className="input-outline">
              <InputIcon
                color="disabled"
                className="in-out-icon"
                fontSize="large"
              />
              <DatePicker
                className="date-picker"
                locale="es"
                autoOk
                disablePast
                minDate={addDays(since, 1)}
                format="dd/MM/yyyy"
                emptyLabel="Cualquier fecha"
                value={until}
                onChange={(date) => {
                  // setDate(new Date(date).setHours(0,0,0,0))
                  // console.log(date);
                  handleDateChange("until", setHours(date, 0));
                  // handleChange(date); //`${date}T00:00:00-03:00`);
                }}
              />
            </div>
          </MuiPickersUtilsProvider>

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
