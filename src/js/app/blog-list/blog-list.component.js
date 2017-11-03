'use strict';

function  controllerFunc() {
  var blogItems =[
    {title: "Title A", id: 1, description: "This is a book", publishDate:" 10-28-2017" },
    {title: "Title B", id: 2, description: "This is a book", publishDate:" 10-28-2017" },
    {title: "Title C", id: 3, description: "This is a book", publishDate:" 10-28-2017" },
    {title: "Title D", id: 4, description: "This is a book", publishDate:" 10-28-2017" },
  ]
  this.items = blogItems;

  this.title = "Blog List";
  this.clicks = 0;
  this.someClickTest = function () {
    console.log("Clicked");
    this.clicks += 1;
    this.title = 'Clicked ' + this.clicks + ' times';
  }
}

angular.module('blogList').
  component('blogList',{
    templateUrl: '/templates/blog-list.html',
    controller: [controllerFunc],
    controllerAs: 'vm'
})
