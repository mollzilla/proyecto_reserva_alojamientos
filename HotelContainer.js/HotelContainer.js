import React from "react";
import "./styles.css";

const {
  Container,
  Card,
  makeStyles,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Icon,
  Paper,
  Grid
} = window["MaterialUI"];

export default class HotelContainer extends React.Component {
  /// hotel Container recibe como props data y al ser el padre es la unica fuente de la verdad, de ahi la pasa al header y al grid

  state = {
    cosas: "the single source of truth",
    since: null,
    until: null,
    country: null,
    hotelsData: hotelsData
  };

  handleDateChange = (limit, value) => {
    console.log(limit, value);

    this.setState({
      ...this.state,
      [limit]: new Date(value)
    });
    console.log(this.state);
  };

  handleCountryChange = (country) => {
    this.setState({
      country: country
    });
  };

  hotelsFilter = () => {};

  render() {
    // console.log(this.props.data)
    console.log(hotelsData);
    return (
      <Container>
        <Header
          handleDateChange={this.handleDateChange}
          since={this.state.since}
          until={this.state.until}
        />

        <Grid container spacing={8}>
          {hotelsData.map((hotel, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Hotelcard hotel={hotel} key={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default HotelContainer;
