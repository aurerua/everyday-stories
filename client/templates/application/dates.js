Template.registerHelper("localizedDateAndTime", function(date) {
    if(date)
        return moment(date).format('l LT');
});