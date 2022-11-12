function setFormatDate(date) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let beginningRentalsDate = date.toLocaleDateString("fr-FR", options)
  return beginningRentalsDate
}

export { setFormatDate }