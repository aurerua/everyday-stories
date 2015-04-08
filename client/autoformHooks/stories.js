var storyHooks = {
  formToDoc: function(doc) {
      doc.submitted = new Date();
    return doc;
  }
};

AutoForm.addHooks('insertStoryForm', storyHooks);
