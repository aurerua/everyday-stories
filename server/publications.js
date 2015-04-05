Meteor.publish('stories', function () {
  return Stories.find();
});
