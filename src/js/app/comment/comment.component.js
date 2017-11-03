'use strict';

function controllerFunc(){
  this.limit = 140;
  this.text = ''
  this.counter = this.limit;

  this.modelChange = ()=>{
    if (this.text.length > this.limit){
      console.log('HERE: ', this.text.length);
      this.text = this.text.substring(0, this.limit);
    }
    this.counter = this.limit - this.text.length;
  }
}


angular.module('comment').component('myComp', {
    controller: [controllerFunc],
    controllerAs: 'vm',
    templateUrl: 'templates/comment.html'
});
