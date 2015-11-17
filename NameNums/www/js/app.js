// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('NameNums', ['ionic'])

//following function sets the location of the nav tabs to the bottom. originally defaults to top for android. 

.config(function($stateProvider, $urlRouterProvider) {
    
	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider
	
	.state('home', {
		url: '/home',
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl'
	})

	// setup an abstract state for the tabs directive
	.state('tab', {
		url: '/tab',
		abstract: true,
		templateUrl: 'templates/tabs.html'
	})

	// Each tab has its own nav history stack:
	.state('tab.main', {
		url: '/main',
		views: {
			'tab-main': {
				templateUrl: 'templates/main.html',
				controller: 'mainCtrl'
			}
		}
	})
	;
    
	// if none of the above states are matched, use this as the fallback
	//$urlRouterProvider.otherwise('/login');
});