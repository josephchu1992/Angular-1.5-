'use strict';

angular.module('try')
	.config(function($stateProvider){
				$stateProvider.state('home', {
					  url: '/home',
						template:'<h1>Hello</h1>'

				});

				// $stateProvider.state('message', {
				// 	url: '/message',
				// 	component:
        //
				// });
	});
