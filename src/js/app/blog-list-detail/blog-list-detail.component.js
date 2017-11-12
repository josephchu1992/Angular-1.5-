'use strict';

function  controllerFunc($stateParams) {
  var blogItems =[
    {title: "Title A", id: 1, description: "This is a book", publishDate:" 10-28-2017" },
    {title: "Title B", id: 2, description: "This is a book", publishDate:" 10-28-2017" },
    {title: "Title C", id: 3, description: "This is a book", publishDate:" 10-28-2017" },
    {title: "Title D", id: 4, description: "This is a book", publishDate:" 10-28-2017" },
  ]
  console.log($routeParams);
  this.title = "Blog" + $stateParams.id;

}

angular.module('blogListDetail').
  component('blogListDetail',{
    templateUrl: '/templates/blog-list-detail.html',
    controller: [controllerFunc],
    controllerAs: 'vm'
})
