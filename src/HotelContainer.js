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
  /// hotel Container usa la constante data y como si fuera data traida de una api y al ser el padre es la unica fuente de la verdad, de ahi la pasa al header y al grid

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

  render() {
    const {
      since,
      until,
      country,
      price,
      size,
      selectedHotels,
      empty,
      validInterval
    } = this.state;

    const getSizeFilter = (x) => {
      let sizeFilter = true;
      if (size === "large") sizeFilter = x.rooms > 20;
      else if (size === "medium") sizeFilter = x.rooms > 10 && x.rooms < 21;
      else if (size === "small") sizeFilter = x.rooms < 11;
      return sizeFilter;
    };

    const getHotelsFilter = () => {
      return hotelsData.filter((x) => {
        let priceFilter = price !== "any" ? x.price === price : true;
        let countryFilter = country !== "any" ? x.country === country : true;
        let sizeFilter = getSizeFilter(x);
        let dateFilter =
          !since || !until
            ? true
            : since.valueOf() >= x.availabilityFrom &&
              until.valueOf() <= x.availabilityTo;

        return dateFilter && priceFilter && countryFilter && sizeFilter;
      });
    };

    const handleFieldChange = (name, value) => {
      this.setState({ ...this.state, [name]: value });
      this.getHotelsFilter();
    };

    const handleDateChange = (limit, value) => {
      let newSince = limit === "since" ? value : since;
      let newUntil = limit === "until" ? value : until;
      if (since && until && newSince.valueOf() >= newUntil.valueOf())
        newUntil = addDays(newSince, 1);

      this.setState({
        since: newSince,
        until: newUntil
      });

      this.getHotelsFilter();
    };

    const handleResetFilter = () => {
      this.setState({
        since: null,
        until: null,
        country: "any",
        price: "any",
        size: "any",
        selectedHotels: hotelsData,
        empty: false,
        validInterval: true
      });
    };

    return (
      <Container>
        <Header
          handleFieldChange={handleFieldChange}
          handleDateChange={handleDateChange}
          handleResetFilter={handleResetFilter}
          since={since}
          until={until}
          today={today}
          size={size}
          price={price}
          country={country}
        />

        {getHotelsFilter().length > 0 ? (
          <Grid container>
            {getHotelsFilter().map((hotel, i) => (
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

export default HotelContainer;
