score = new Score(
    {
        persistant:true,             // uses localStorage -  default: true
        callback:function(){
            sweetAlert({
                title: 'Congrats you have reached a new level',
                text: "<img src='/images/badges/very-hollow-star-180x180.png'/>",
                html: true
            });
        },    // callback when levelling up
        levels:                     // custom levels
            [
                {
                    "checkmark": 0,
                    "status": "noob",
                    "quote": "You're just a little newbie"
                },
                {
                    "checkmark": 200,
                    "status": "champion",
                    "quote": "You're halfway there"
                },
                {
                    "checkmark": 700,
                    "status": "legend",
                    "quote": "You made it!"
                }
            ]
    }
);

Meteor.startup(function () {
});