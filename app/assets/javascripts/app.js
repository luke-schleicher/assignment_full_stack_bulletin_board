var BulletinBoard = angular.module('BulletinBoard', ['ui.router', 'restangular'])

// TODO: left off with setup

BulletinBoard.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }]);

BulletinBoard.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/posts");

  $stateProvider
    .state('posts', {
      url: "/posts",
      templateUrl: "/templates/post.html",
      controller: "PostsCtrl"
    });

});