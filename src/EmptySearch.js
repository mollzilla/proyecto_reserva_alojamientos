import React from "react";
import "./styles.css";
// import Card from "@material-ui/core/Card";
import { Card } from "@material-ui/core";
// import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

function EmptySearch() {
  // console.log("mili")
  return (
    <Card width="50" className="no-results">
      <Grid item xs={12}>
        <Paper className="info-paper no-results" elevation={0}>
          <h2>
            <SentimentVeryDissatisfiedIcon className="sad-face"></SentimentVeryDissatisfiedIcon>
          </h2>
          <h2>
            Lo sentimos, no hay ningún hotel con los filtros seleccionados.
          </h2>
        </Paper>
      </Grid>
    </Card>
  );
}

export default EmptySearch;
