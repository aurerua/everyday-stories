Stories = new Mongo.Collection('stories');

// Create a schema for the stories collection.
Schema = {};
Schema.stories = new SimpleSchema({
  author:{
    type: String,
    label: "Author",
    max: 100,
    optional: true
  },
  content:{
    type: String,
    label: "Content",
    max: 10000
  },
  createdAt: {
    type: Date,
    label: "Posted on",
    denyUpdate: true
  }
});

// Attach the schema to the stories collection.
Stories.attachSchema(Schema.stories);

// Create pagination for displaying the stories.
this.Pages = new Meteor.Pagination(Stories, {
  itemTemplate: "storyItem", // the template to display a story
  perPage: 5,
  sort: {
    createdAt: -1
  }
});

if( Meteor.isServer ) {
  Meteor.methods({
    storyInsert: function (doc) {// storyInsert gets called by the autoform
      // Get and verify reCaptcha.
      var reCaptchaResponse = ServerSession.get('reCaptchaResponse');
      var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, reCaptchaResponse);
      
      if( verifyCaptchaResponse.data.success === false ){
        console.log('reCAPTCHA check failed!', verifyCaptchaResponse);
        return verifyCaptchaResponse.data;
      };
  
      console.log('reCAPTCHA verification passed!');
      // Doing clean first adds the date autovalue and fixes this error: 
      //   Exception while invoking method 'storyInsert' Error: Match error:
      //   One or more properties do not match the schema.
      Schema.stories.clean(doc); 
      // server-side check for security and data integrity
      check(doc, Schema.stories);
  
      var storyId = Stories.insert(doc);
     
      return true;
    }
  });
}