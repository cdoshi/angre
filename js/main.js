require.config({

    paths : {
        angular : '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.1/angular',
        angularRoute : '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.1/angular-route',
        angularAMD : '//cdn.jsdelivr.net/angular.amd/0.2/angularAMD.min',
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min',
        bootstrap: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min'
    },

    shim : {
        'angular' : {
            exports : 'angular'
        },
        angularAMD : {
            exports : 'angularAMD'
        },
        angularRoute : ['angular'],
        bootstrap : { 
            deps :['jquery'] 
        }
    },

    deps : ['app']
}); 