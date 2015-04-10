Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
   notFoundTemplate: 'notFound',
   waitOn: function () {
      return [Meteor.subscribe('stories')];
    }
});

Router.route('/', {
  name: 'storiesList'
});
