Template.storiesList.helpers({
  stories: function () {
    return Stories.find({}, {sort: {submitted: -1}});
  }
});
