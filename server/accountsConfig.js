Meteor.startup(function(){

    ServiceConfiguration.configurations.remove({
        service: 'google'
    });

    ServiceConfiguration.configurations.insert({
        service: 'google',
        clientId: '496285804026-u5p6ihhpl4o5ri2170jh9j63rb0j1cbd.apps.googleusercontent.com',
        secret: 'pNkKXVcmnsLLtwCUL5zkrzto'
    });
    ServiceConfiguration.configurations.remove({
        service: 'facebook'
    });

    ServiceConfiguration.configurations.insert({
        service: 'facebook',
        appId: '750383495067510',
        secret: 'f7d28c1fba8da1632e86608d49e17529'
    });


})