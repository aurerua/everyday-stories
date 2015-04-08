// Because the date of the insert of a new story into the database is not set by
// the user we use "storyHooks" to give a value to the "submitted"
// key of a new story. 
var storyHooks = {
  before: {
    insert: function(doc) {
      doc.submitted = new Date();
      return doc;
    }
  }
}

AutoForm.hooks({
  insertStoryForm: storyHooks
});
