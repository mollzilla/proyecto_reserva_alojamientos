import React from "react";
import "./styles.css";
// import Card from "@material-ui/core/Card";
import { Card } from "@material-ui/core";
// import CardActions from "@material-ui/core/CardActions";
import { CardActions } from "@material-ui/core";
// import { CardContent } from "@material-ui/CardContent";
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

function EmptySearch() {
  return (
    <Card width="50">
      <Grid item xs={12}>
        <Paper className="info-paper no-results" elevation={0}></Paper>
      </Grid>
    </Card>
  );
}

export default EmptySearch;
