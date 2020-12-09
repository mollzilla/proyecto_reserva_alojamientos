import React from "react";
import "./styles.css";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

function EmptySearch() {

  return (
    <div width="50">
      <Grid item xs={12}>
        <Paper className="info-paper no-results" elevation={5}>
          <h2>
            <SentimentVeryDissatisfiedIcon className="sad-face"></SentimentVeryDissatisfiedIcon>
          </h2>
          <h2>
            Lo sentimos, no hay ningún hotel con los filtros seleccionados.
          </h2>
        </Paper>
      </Grid>
    </div>
  );
}

export default EmptySearch;
