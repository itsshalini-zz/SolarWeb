(function () {

    var app = angular.module('app', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
    	.when('/', {
    	    templateUrl: 'views/home.html',
    	    controller: 'homeController'
    	})
    	.when('/login', {
    	    templateUrl: 'views/login.html',
    	    controller: 'loginController'
    	})
    	.when('/about', {
    	    templateUrl: 'views/about.html',
    	    controller: 'homeController'
    	})
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'homeController'
        })
        .when('/consumer', {
            templateUrl: 'views/consumer.html',
            controller: 'consumerController'
        })
        .when('/producer', {
            templateUrl: 'views/about.html',
            controller: 'homeController'
        })
        .when('/subsidies', {
            templateUrl: 'views/subsidies.html',
            controller: 'homeController'
        })
        .when('/whySolar', {
            templateUrl: 'views/whySolar.html',
            controller: 'homeController'
        })
        .when('/blog', {
            templateUrl: 'views/blog/list.html',
            controller: 'blogController'
        })
        .when('/blog/add', {
            resolve: {
                "check": function ($rootScope, $location) {
                    if (!$rootScope.userLoggedIn) {
                        $location.path = '/login';
                    }
                }
            },
            templateUrl: 'views/blog/add.html',
            controller: 'blogController'
        })
        .when('/blog/:id', {
            templateUrl: 'views/blog/edit.html',
            controller: 'blogController'
        });

        $routeProvider.otherwise({ redirectTo: '/' });

    });

    function validateLogin($rootScope,$location)
    {
        if(!$rootScope.userLoggedIn)
        {
            $location.path = '/login';
        }
    }

    /*app.config(function($stateProvider, $urlRouterProvider){

    	$urlRouterProvider.otherwise('/home');

    	$stateProvider
    	.state('login',{
    		url: '/login',
	    	controller: "loginController as login",
	    	templateUrl: 'client/views/login.html'
    	}).state('home', {
    		url: '/home',
    		controller: "homeController as homeCtrl",
    		templateUrl: 'client/views/index.html'
    	});
    });*/

}());