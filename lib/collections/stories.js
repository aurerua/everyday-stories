Stories = new Mongo.Collection('stories');

Stories.attachSchema(new SimpleSchema({
  author:{
    type: String,
    label: "Author",
    max: 100
  },
  content:{
    type: String,
    label: "Content",
    max: 10000
  },
  submitted: {
    type: Date,
    label: "Posted on"
  }
}));


this.Pages = new Meteor.Pagination(Stories, {
  itemTemplate: "storyItem",
  perPage: 14,
  sort: {
    submitted: -1
  }
});


if (Meteor.isServer) {
  Stories.allow({
    insert: function (doc) {
      return true;
    }
  });
};

