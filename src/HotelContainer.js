import React from "react";
import "./styles.css";
import { hotelsData } from "./data";
import Header from "./Header";
import HotelCard from "./HotelCard";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

console.log(33, hotelsData);
class HotelContainer extends React.Component {
  /// hotel Container recibe como props data y al ser el padre es la unica fuente de la verdad, de ahi la pasa al header y al grid

  state = {
    cosas: "the single source of truth",
    since: new Date(),
    until: new Date(),
    country: "any",
    price: null,
    size: "any",
    hotelsData: hotelsData,
    selectedHotels: null
  };

  // const handleFieldChange = (name, value) => {
  // setModalItem({ ...modalItem, [name]: value });
  // };

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

  handleCountryChange = (country) => {
    this.setState({
      country: country
    });
  };

  handlePriceChange = (price) => {
    this.setState({
      price: price
    });
  };

  handleSizeChange = (size) => {
    this.setState({
      size: size
    });
  };

  getHotelsFilter = () => {};

  render() {
    // console.log(this.props.data)
    console.log(this.state.country);
    // console.log(hotelsData);
    return (
      <Container>
        <Header
          handleDateChange={this.handleDateChange}
          handlePriceChange={this.handlePriceChange}
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
