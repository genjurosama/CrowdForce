Meteor.subscribe("events");
Template.dashboard.rendered = function() {

};


Template.dashboard.helpers({
    getEvents: function(){

        return Events.find( { _id: { $in:Meteor.user().profile.liked } } );
    }
})
