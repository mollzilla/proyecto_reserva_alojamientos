import React from "react";
import "./styles.css";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
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
    <Card width="50" className="hotel-card">
      <CardActionArea>
        <Grid item xs={12}>
          <Paper className="info-paper" elevation={0}>
            <img src={photo} alt={slug} className="photo" />
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
            style={{ display: "flex", alignItems: "center", padding: 0 }}
            elevation={2}
          >
            <LocationOnIcon
              // style={{
              //   background: "#209cee",
              //   padding: "5px 10px",
              //   fill: "white",
              // borderRadius: "5px 0 0 5px"
              // }}
              className="info-icon"
            />
            <span className="filters-text">
              {city}, {country}
            </span>
          </Paper>
        </Grid>

        <Grid container className="limbo">
          <Grid item xs={7}>
            <Paper
              className="info-paper"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 10px 0 0 "
              }}
              elevation={2}
            >
              <LocalHotelIcon
                // style={{
                //   background: "#209cee",
                //   padding: "5px 10px",
                //   fill: "white",
                //   size: "large"
                // }}
                className="info-icon"
              />
              <span className="filters-text">
                {rooms} {rooms > 1 ? " Habitaciones" : " Habitación"}
              </span>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="info-paper money-paper" elevation={2}>
              <AttachMoneyIcon
                fontSize="small"
                style={{ fill: "white", backgroundColor: "#209cee" }}
              />
              <AttachMoneyIcon
                style={{ fill: price > 1 ? "white" : "#57B4F2" }}
                fontSize="small"
              />
              <AttachMoneyIcon
                fontSize="small"
                style={{ fill: price > 2 ? "white" : "#57B4F2" }}
              />
              <AttachMoneyIcon
                fontSize="small"
                style={{ fill: price > 3 ? "white" : "#57B4F2" }}
              />
            </Paper>
          </Grid>
        </Grid>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" className="reservar">
          Reservar
        </Button>
      </CardActions>
    </Card>
  );
}

export default HotelCard;
