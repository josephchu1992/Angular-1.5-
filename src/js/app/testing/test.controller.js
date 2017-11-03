'use strict';

angular.module('test')
	.controller('testController',function(){
		this.limit = 10;
		this.counter = this.limit;
		
		this.countOf = function() {
			console.log('in the func ', this.text);
			if(this.text.length > this.limit)
			{
				 this.text = this.text.substring(0, this.limit);
			}
			this.counter = this.limit - this.text.length;

   };
});
