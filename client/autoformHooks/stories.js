var storyHooks = {
  formToDoc: function(doc) {
      doc.createdDate = moment();
    return doc;
  }
}

AutoForm.addHooks('insertStoryForm', storyHooks);
