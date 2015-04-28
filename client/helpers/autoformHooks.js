// Define a hook to be attached to the insertStoryForm autoform.
var storyHooks = {
  before: {
    // This hook is for an autoform of type "method".
    method: function(doc) { 
      // Save reCaptcha's response in a ServerSession variable.
      ServerSession.set('reCaptchaResponse', $('#g-recaptcha-response').val());
      return doc;
    }
  }
}

// Attach the hook to the form. 
AutoForm.hooks({
  insertStoryForm: storyHooks
});
