Stories = new Mongo.Collection('stories');

Stories.attachSchema(new SimpleSchema({
  author:{
    type: String,
    label: "Author",
    max: 100
  },
  title:{
    type: String,
    label: "Title",
    max: 200
  },
  content:{
    type: String,
    label: "Content",
    max: 10000
  },
  createdDate: {
    type: Date,
    label: "Posted on",
    optional: true
  }
}));


if (Meteor.isServer) {
  Stories.allow({
    insert: function (doc) {
      return true;
    }
  });
};
