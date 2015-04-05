Template.storyItem.events({
 'click .delete': function (e) {
    e.preventDefault();
    if (confirm("Delete this story?")) {
      var currentStoryId = this._id;
      Stories.remove(currentStoryId);
//      Router.go('storiesList');
    }
  }
});
