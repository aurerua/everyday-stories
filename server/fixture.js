// Insert dummy stories into the database for the demo
if (Stories.find().count() === 0) {
    dimsum.configure({ flavor: 'jabberwocky' });
    var astronomers = [
        {name:'Kepler', date:moment("1600-10-20 4:30", "YYYY-MM-DD HH:mm").toDate()},
        {name:'Halley', date:moment("1700-03-12 2:23", "YYYY-MM-DD HH:mm").toDate()},
        {name:'Newton', date:moment("1700-05-24 4:30", "YYYY-MM-DD HH:mm").toDate()}, 
        {name:'Hubble', date:moment("1900-12-03 4:30", "YYYY-MM-DD HH:mm").toDate()},
        {name:'Galilei', date:moment("1600-06-18 4:30", "YYYY-MM-DD HH:mm").toDate()},
        {name:'Copernicus', date:moment("1500-11-07 4:30", "YYYY-MM-DD HH:mm").toDate()}];
    for (var i = 0; i < 6; i++) {
        Stories.insert({
            author: astronomers[i].name,
            content: dimsum(1),
            createdAt: astronomers[i].date
        });
    };
};