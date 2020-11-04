import React from "react";
import "./styles.css";
import { hotelsData } from "../public/data";
import Header from "./Header";
import HotelCard from "./HotelCard";

// import Container from "@material-ui/core/Container";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";

class HotelContainer extends React.Component {
  /// hotel Container recibe como props data y al ser el padre es la unica fuente de la verdad, de ahi la pasa al header y al grid

  state = {
    cosas: "the single source of truth",
    since: new Date(),
    until: new Date(),
    country: "any",
    price: "any",
    size: "any",
    hotelsData: hotelsData,
    selectedHotels: null
  };

  handleFieldChange = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  //    today = new Date()
  // const tomorrow = new Date(today)
  // tomorrow.setDate(tomorrow.getDate() + 1)

  handleDateChange = (limit, value) => {
    console.log(limit, value);
    if (
      limit === "since" &&
      new Date(value).valueOf() > new Date(this.state.until).valueOf()
    ) {
      this.setState({
        ...this.state,
        [limit]: new Date(value),
        until: new Date(value)
      });
    } else {
      this.setState({
        ...this.state,
        [limit]: new Date(value)
      });
    }
  };

  getHotelsFilter = () => {};

  render() {
    // console.log(this.props.data)
    console.log(this.state);
    // console.log(hotelsData);
    return (
      <Container>
        <Header
          handleFieldChange={this.handleFieldChange}
          handleDateChange={this.handleDateChange}
          handleSizeChange={this.handleSizeChange}
          handleCountryChange={this.handleCountryChange}
          since={this.state.since}
          until={this.state.until}
        />

        <Grid container spacing={8}>
          {this.state.hotelsData.map((hotel, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <HotelCard hotel={hotel} key={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default HotelContainer;
