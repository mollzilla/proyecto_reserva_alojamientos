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
    validInterval: true
  };

  render() {
    const { since, until, country, price, size } = this.state;

    const getSizeFilter = (x) => {
      let sizeFilter = true;
      if (size === "Grande") sizeFilter = x.rooms > 20;
      else if (size === "Mediano") sizeFilter = x.rooms > 10 && x.rooms < 21;
      else if (size === "Pequeño") sizeFilter = x.rooms < 11;
      return sizeFilter;
    };

    const getHotelsFilter = () => {
      return hotelsData
        .filter((hotel) => (price !== "any" ? hotel.price === price : true))
        .filter((hotel) =>
          country !== "any" ? hotel.country === country : true
        )
        .filter((hotel) => getSizeFilter(hotel))
        .filter((hotel) =>
          !since || !until
            ? true
            : since.valueOf() >= hotel.availabilityFrom &&
              until.valueOf() <= hotel.availabilityTo
        );
    };

    const handleFieldChange = (name, value) => {
      this.setState({ ...this.state, [name]: value });
      getHotelsFilter();
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

      getHotelsFilter();
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
