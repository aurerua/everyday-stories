// Template.storySubmit.events({
//   'submit form': function (e) {
//     e.preventDefault();

//     var story = {
//       author: $(e.target).find('[name=author]').val(),
//       content: $(e.target).find('[name=content]').val(),
//       createdDate: moment();
//     };

//     Meteor.call(Stories.insert(story), function (error, result) {
//       // display the error to the user and abort
//       if (error){
//         return throwError(error.reason);
//       }
//     });
//   }
// });
