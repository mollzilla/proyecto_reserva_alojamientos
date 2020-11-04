import React from "react";
import "./styles.css";
// import Card from "@material-ui/core/Card";
import { Card } from "@material-ui/core";
// import CardActions from "@material-ui/core/CardActions";
import { CardActions } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LocalHotelIcon from "@material-ui/icons/LocalHotel";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function HotelCard(props) {
  const {
    slug,
    name,
    photo,
    description,
    rooms,
    city,
    country,
    price
  } = props.hotel;

  return (
    <Card width="50">
      <CardActionArea>
        <Grid item xs={12}>
          <Paper className="info-paper" elevation={0}>
            <img src={photo} alt="" />
          </Paper>
        </Grid>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <Grid item xs={12}>
          <Paper
            className="info-paper"
            style={{ display: "flex", alignItems: "center" }}
            elevation={2}
          >
            <LocationOnIcon />
            <span className="filters-text">
              {city}, {country}
            </span>
          </Paper>
        </Grid>

        <Grid container className="limbo">
          <Grid item xs={7}>
            <Paper
              className="info-paper"
              style={{ display: "flex", alignItems: "center" }}
              elevation={2}
            >
              <LocalHotelIcon />
              <span className="filters-text">
                {rooms} {rooms > 1 ? " Habitaciones" : " Habitación"}
              </span>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className="info-paper" elevation={2}>
              <AttachMoneyIcon fontSize="small" />
              <AttachMoneyIcon
                fontSize="small"
                color={price > 1 ? "inherit" : "disabled"}
              />
              <AttachMoneyIcon
                fontSize="small"
                color={price > 2 ? "inherit" : "disabled"}
              />
              <AttachMoneyIcon
                fontSize="small"
                color={price > 3 ? "inherit" : "disabled"}
              />
            </Paper>
          </Grid>
        </Grid>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary" className="reservar">
          Reservar
        </Button>
      </CardActions>
    </Card>
  );
}

export default HotelCard;
