Meteor.methods({
  'Items.insert': function (params) {
    console.log(params);
    params.uid=Meteor.userId();
    console.log(params);
    Items.insert(params);
  }
});
