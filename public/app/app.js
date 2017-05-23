var app = angular.module('Bounty', ['ui.router', 'BountyCtrls']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/404');

            $stateProvider
            // landing page
                .state('home', {
                    url: '/',
                    templateUrl: 'app/views/home.html',
                    controller: 'HomeCtrl'
                })
                // sign up
                .state('signup', {
                    url: '/signup',
                    templateUrl: 'app/views/userSignup.html',
                    controller: 'SignupCtrl'
                })
                // login
                .state('login', {
                    url: '/login',
                    templateUrl: 'app/views/userLogin.html',
                    controller: 'LoginCtrl'
                })
                .state('user', {
                    url: '/user',
                    templateURL: 'app/views/user.html',
                    controller: 'UserCtrl'
                })
                .state('/admin', {
                    url: '/admin',
                    templateURL: 'app/views/admin.html',
                    controller: 'AdminCtrl'
                })
                .state('group', {
                    url: '/group',
                    templateURL: 'app/views/group.html',
                    controller: 'GroupCtrl'
                })
                .state('404', {
                    url: '/404',
                    templateUrl: 'app/views/404.html'
                });

            $locationProvider.html5Mode(true);
        }
    ])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    }]);
