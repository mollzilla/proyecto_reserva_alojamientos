import React from "react";
import "./styles.css";
import { hotelsData, today } from "./data";
import Header from "./Header";
import HotelCard from "./HotelCard";
import EmptySearch from "./EmptySearch";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import addDays from "date-fns/addDays";

class HotelContainer extends React.Component {
  /// hotel Container recibe como props data y al ser el padre es la unica fuente de la verdad, de ahi la pasa al header y al grid

  tomorrow = new Date(today);
  tomorrow = new Date(this.tomorrow.setDate(this.tomorrow.getDate() + 1));

  state = {
    cosas: "the single source of truth",
    since: null,
    until: null,
    country: "any",
    price: "any",
    size: "any",
    selectedHotels: hotelsData,
    empty: false,
    validInterval: true
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
      let dateFilter =
        !this.state.since || !this.state.until
          ? true
          : this.state.since.valueOf() >= x.availabilityFrom &&
            this.state.until.valueOf() <= x.availabilityTo;

      return dateFilter && priceFilter && countryFilter && sizeFilter;
    });
  };

  handleFieldChange = (name, value) => {
    this.setState({ ...this.state, [name]: value });
    this.getHotelsFilter();
  };

  handleDateChange = (limit, value) => {
    let newSince = limit === "since" ? value : this.state.since;
    let newUntil = limit === "until" ? value : this.state.until;
    if (
      this.state.since &&
      this.state.until &&
      newSince.valueOf() >= newUntil.valueOf()
    )
      newUntil = addDays(newSince, 1);

    this.setState({
      since: newSince,
      until: newUntil
    });

    this.getHotelsFilter();
  };

  render() {
    console.log(this.state.since, this.state.until);
    return (
      <Container>
        <Header
          handleFieldChange={this.handleFieldChange}
          handleDateChange={this.handleDateChange}
          since={this.state.since}
          until={this.state.until}
          today={today}
          tomorrow={this.tomorrow}
          size={this.state.size}
          country={this.state.country}
        />

        {this.getHotelsFilter().length > 0 ? (
          <Grid container>
            {this.getHotelsFilter().map((hotel, i) => (
              <Grid item xs={12} sm={4} key={i}>
                <HotelCard hotel={hotel} key={i} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <div>
            <EmptySearch />
          </div>
        )}
      </Container>
    );
  }
}

// {this.getHotelsFilter().map((hotel, i) => (
//   <Grid container spacing={8}>
//     <Grid item xs={12} sm={4} key={i}>
//       <HotelCard hotel={hotel} key={i} />
//     </Grid>
//   </Grid>
// ))}
// {this.getHotelsFilter().length === 0 && (
//   <Grid container spacing={8}>
//     <Grid item xs={12}>
//       <EmptySearch />
//     </Grid>
//   </Grid>
// )}

export default HotelContainer;
