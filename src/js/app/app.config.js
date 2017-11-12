'use strict';


angular.module('try')
	.config(function($locationProvider, $stateProvider, $urlRouterProvider){
				$locationProvider.html5Mode({
					enabled:true
				})
				
				$urlRouterProvider.otherwise('home');
	
				$stateProvider.state('home', {
					  url: '/home',
					  templateUrl:'../templates/home.html'

				});
	
				 $stateProvider.state('comment', {
				 	url: '/comment',
					component:'myComp'
				 });
	
				 	
				 $stateProvider.state('blog-list', {
				 	url: '/blog-list/',
					component:'blogList'
				 });
				
//				 $stateProvider.state('blog-list.detail', {
//				 	url: '/blog-list-detail/:id',
//					component:'blogListDetail'
//				 });
	});
