// handleDateChange = (limit, value) => {
//   if (limit === "since") {
//     console.log(value)
//     if (this.state.until === "") {
//       let until = new Date(value);
//       this.setState({
//         [limit]: new Date(value),
//         until: new Date(until.setDate(new Date(value).getDate() + 1))
//       });
//     } else if (
//       new Date(value).getTime() > new Date(this.state.until).getTime()
//     ) {
//       console.log(value.valueOf());
//       console.log(this.state.until.valueOf());
//       console.log(new Date(this.state.until).valueOf());
//       this.setState({
//         [limit]: new Date(value),
//         until: new Date(
//           this.state.until.setDate(new Date(value).getDate() + 1)
//         )
//       });
//     }
//   } else if (limit === "until" && this.state.since === "") {
//     this.setState({
//       until: new Date(value),
//       since: new Date()
//     });
//   } else {
//     this.setState({
//       ...this.state,
//       [limit]: new Date(value)
//     });
//   }
// };
