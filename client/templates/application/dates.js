Template.registerHelper("localizedDateAndTime", function(date) {
  if (date)
    //return the same date, re-formatted to display as wanted
    return moment(date).format('l LT');
});