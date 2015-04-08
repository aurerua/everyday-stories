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
    label: "Posted on",
/*    autovalue: function () {
     if (this.isInsert) {
       return new Date;
     } else {
      this.unset();
     }
    }*/
  }
}));


if (Meteor.isServer) {
  Stories.allow({
    insert: function (doc) {
      return true;
    }
  });
};
