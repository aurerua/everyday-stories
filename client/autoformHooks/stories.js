var storyHooks = {
  before: {
    insert: function(doc) {
      doc.submitted = new Date();
      return doc;
    }
  }
}

/*AutoForm.addHooks('insertStoryForm', storyHooks);*/

AutoForm.hooks({
 insertStoryForm: storyHooks
});
