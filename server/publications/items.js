Meteor.publishComposite("items", function() {
  return {
    find: function() {
      return Items.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});


Meteor.publish("events", function () {
  return Events.find();
});

Meteor.publish('images', function(){
  return Images.find()
});
