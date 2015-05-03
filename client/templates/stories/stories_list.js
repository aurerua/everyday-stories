Template.storiesList.helpers({
  atLeastOneStory: function () {// used to check if "stories" collection not empty
    return Stories.findOne({}, {fields: {'content': 0,'createdAt': 0}});
  }
});