import React from "react";
import "./styles.css";
import { hotelsData, today } from "./data";
import Header from "./Header";
import HotelCard from "./HotelCard";
import EmptySearch from "./EmptySearch";
// import Container from "@material-ui/core/Container";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";

class HotelContainer extends React.Component {
  /// hotel Container recibe como props data y al ser el padre es la unica fuente de la verdad, de ahi la pasa al header y al grid

  tomorrow = new Date(today);
  tomorrow = new Date(this.tomorrow.setDate(this.tomorrow.getDate() + 1));

  state = {
    cosas: "the single source of truth",
    since: "",
    until: "",
    country: "any",
    price: "any",
    size: "any",
    selectedHotels: null,
    empty: false
  };

  getSizeFilter = (x) => {
    let sizeFilter = true;
    if (this.state.size === "large") sizeFilter = x.rooms > 20;
    else if (this.state.size === "medium")
      sizeFilter = x.rooms > 10 && x.rooms < 21;
    else if (this.state.size === "small") sizeFilter = x.rooms < 11;
    return sizeFilter;
  };

  getHotelsFilter = () => {
    return hotelsData.filter((x) => {
      let priceFilter =
        this.state.price !== "any" ? x.price === this.state.price : true;
      let countryFilter =
        this.state.country !== "any" ? x.country === this.state.country : true;
      let sizeFilter = this.getSizeFilter(x);

      return (
        x.availabilityFrom > this.state.since.valueOf() &&
        x.availabilityTo > this.state.until.valueOf() &&
        priceFilter &&
        countryFilter &&
        sizeFilter
      );
    });
  };

  handleFieldChange = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  handleDateChange = (limit, value) => {
    console.log(limit);

    if (limit === "since") {
      if (this.state.until === "") {
        let until = new Date(value);
        this.setState({
          [limit]: new Date(value),
          until: new Date(until.setDate(new Date(value).getDate() + 1))
        });
      } else if (
        new Date(value).valueOf() > new Date(this.state.until).valueOf()
      ) {
        this.setState({
          [limit]: new Date(value),
          until: new Date(
            this.state.until.setDate(new Date(value).getDate() + 1)
          )
        });
      }
    } else if (limit === "until" && this.state.since === "") {
      this.setState({
        until: new Date(value),
        since: new Date()
      });
    } else {
      this.setState({
        ...this.state,
        [limit]: new Date(value)
      });
    }
  };

  render() {
    return (
      <Container>
        <Header
          handleFieldChange={this.handleFieldChange}
          handleDateChange={this.handleDateChange}
          since={this.state.since}
          until={this.state.until}
          today={today}
          tomorrow={this.tomorrow}
        />

        <Grid container spacing={8}>
          {this.getHotelsFilter().map((hotel, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <HotelCard hotel={hotel} key={i} />
            </Grid>
          ))}
          {this.getHotelsFilter().length === 0 && (
            <Grid item xs={12}>
              <EmptySearch />
            </Grid>
          )}
        </Grid>
      </Container>
    );
  }
}

export default HotelContainer;
