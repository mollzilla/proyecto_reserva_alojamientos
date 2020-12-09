// const getHotelsFilter = () => {
//   return hotelsData.filter((x) => {
//     let priceFilter = price !== "any" ? x.price === price : true;
//     let countryFilter = country !== "any" ? x.country === country : true;
//     let sizeFilter = getSizeFilter(x);
//     let dateFilter =
//       !since || !until
//         ? true
//         : since.valueOf() >= x.availabilityFrom &&
//           until.valueOf() <= x.availabilityTo;

//     return dateFilter && priceFilter && countryFilter && sizeFilter;
//   });
// };
