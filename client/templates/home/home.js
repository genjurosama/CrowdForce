Meteor.subscribe("events");
Meteor.subscribe("images");
Template.home.rendered = function(){

    var stack;

    stack = gajus.Swing.Stack();

    [].forEach.call(document.querySelectorAll('.stack li'), function (targetElement) {
        stack.createCard(targetElement);

        targetElement.classList.add('in-deck');
    });

    stack.on('throwout', function (e) {
        console.log(e.target.innerText || e.target.textContent, 'has been thrown out of the stack to the', e.throwDirection == 1 ? 'right' : 'left', 'direction.');
        e.target.classList.remove('in-deck');
        $(e.target).remove();
        likedEventId = $(e.target).attr("rel");
        Materialize.toast(e.throwDirection == 1 ? 'like' : 'Noop',1000);
        if(e.throwDirection == 1){

            score = new Score();
            score.increment(200);
            Meteor.users.update( { _id: Meteor.userId() }, { $push: { "profile.liked": likedEventId },$set:{"profile.score":score.scorecard()}});
        }

    });

    stack.on('throwin', function (e) {
        console.log(e.target.innerText || e.target.textContent, 'has been thrown into the stack from the', e.throwDirection == 1 ? 'right' : 'left', 'direction.');

        e.target.classList.add('in-deck');

    });
}

Template.home.helpers({
    getEvents: function(){
        return Events.find( { _id: { $nin:Meteor.user().profile.liked } } );
    },
    getPicture :function(id){
      return Images.findOne({_id:id}).url();
    }
})


